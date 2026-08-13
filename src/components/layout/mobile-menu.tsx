"use client";

import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  items: NavItem[];
  ctaHref: string;
  ctaLabel: string;
};

export function MobileMenu({ items, ctaHref, ctaLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-11 items-center justify-center"
      >
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        <span aria-hidden="true" className="relative block h-4 w-6">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-0.5 w-6 bg-current transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full flex flex-col gap-6 border-t border-border bg-white px-5 py-6 shadow-soft"
        >
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="inline-flex min-h-12 items-center justify-center rounded-pill bg-brand-orange px-6 font-bold text-white"
          >
            {ctaLabel}
          </a>
        </div>
      ) : null}
    </div>
  );
}
