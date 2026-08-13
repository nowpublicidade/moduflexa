# Floor 04 — MORNING state (desk open, bed closed)

## Option A — image editing / image-to-image (strongly preferred)

Use the generated `afternoon.png` as the reference/input image and give
this edit instruction:

```
Edit this exact photograph. Keep the camera angle, lens, framing, room
architecture, walls, flooring, ceiling, sofa, side table, rug, plant,
floor lamp, and the RIGHT wall cabinet completely unchanged and closed,
pixel-identical to the reference image.

Two changes only:
1. The LEFT wall cabinet has folded open into a compact desk. The wood
   panel (same light oak veneer, same grain, same brushed-aluminum trim)
   is now horizontal, forming a flat work surface at desk height
   (~75cm), hinged at the wall and resting at the front edge on a
   folded-out white powder-coated tubular steel leg frame, small orange
   rubber pads visible on the folding hinge. On the desk surface: one
   closed laptop, one small notebook with a pen, one ceramic cup. A
   simple modern chair (light oak frame, woven cord seat) is pulled up
   to the desk.
2. The daylight is brighter and slightly cooler/more directional than
   the reference, as if it is mid-morning (~6000K), with slightly
   crisper shadows. Everything else — architecture, fixed furniture, the
   closed right cabinet — stays exactly as in the reference image.
```

## Option B — text-to-image only

Copy the full `afternoon.md` prompt, change "neutral warm color
temperature (~5000K, early-afternoon light)" to "brighter, slightly cool
directional daylight (~6000K, mid-morning light), crisper shadows", and
replace only the LEFT cabinet description with:

```
LEFT cabinet — OPEN state: folded open into a compact desk. The wood
panel (light oak veneer, brushed-aluminum trim) is horizontal, forming a
flat work surface at desk height (~75cm), hinged at the wall and resting
at the front edge on a folded-out white powder-coated tubular steel leg
frame, small orange rubber pads visible on the folding hinge. On the
desk: one closed laptop, one small notebook with a pen, one ceramic cup.
A simple modern chair (light oak frame, woven cord seat) pulled up to the
desk. The empty wood cabinet box remains visible as a shallow frame
around the surface, same wood finish, same 100cm width, same wall
position.
```

Keep the RIGHT cabinet exactly as described in `afternoon.md` (closed,
140cm, same position).
