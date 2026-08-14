"use client";

export type ScrollFrame = {
  scrollY: number;
  smoothedScrollY: number;
  viewportHeight: number;
};

type Subscriber = (frame: ScrollFrame) => void;

// Um único listener de scroll/resize (passivo) coordenado com um único loop
// rAF, compartilhado por todos os hooks de motion — em vez de cada hook
// abrir seu próprio listener/loop. O listener grava os valores brutos; o
// loop faz o lerp (inércia) e distribui o frame para os inscritos.
class ScrollEngine {
  private subscribers = new Set<Subscriber>();
  private rafId: number | null = null;
  private rawScrollY = 0;
  private smoothedScrollY = 0;
  private viewportHeight = 0;
  private started = false;
  private readonly lerpFactor = 0.13;

  private onScrollOrResize = () => {
    this.rawScrollY = window.scrollY;
    this.viewportHeight = window.innerHeight;
  };

  private tick = () => {
    this.smoothedScrollY +=
      (this.rawScrollY - this.smoothedScrollY) * this.lerpFactor;
    if (Math.abs(this.rawScrollY - this.smoothedScrollY) < 0.05) {
      this.smoothedScrollY = this.rawScrollY;
    }

    const frame: ScrollFrame = {
      scrollY: this.rawScrollY,
      smoothedScrollY: this.smoothedScrollY,
      viewportHeight: this.viewportHeight,
    };

    this.subscribers.forEach((fn) => fn(frame));
    this.rafId = requestAnimationFrame(this.tick);
  };

  subscribe(fn: Subscriber): () => void {
    this.subscribers.add(fn);
    this.start();
    return () => {
      this.subscribers.delete(fn);
      if (this.subscribers.size === 0) this.stop();
    };
  }

  private start() {
    if (this.started) return;
    this.started = true;
    this.onScrollOrResize();
    this.smoothedScrollY = this.rawScrollY;
    window.addEventListener("scroll", this.onScrollOrResize, {
      passive: true,
    });
    window.addEventListener("resize", this.onScrollOrResize, {
      passive: true,
    });
    this.rafId = requestAnimationFrame(this.tick);
  }

  private stop() {
    this.started = false;
    window.removeEventListener("scroll", this.onScrollOrResize);
    window.removeEventListener("resize", this.onScrollOrResize);
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.rafId = null;
  }
}

// Módulo é singleton por natureza (import compartilhado) — uma instância
// por página, como pedido ("um único listener... um único loop").
export const scrollEngine = new ScrollEngine();
