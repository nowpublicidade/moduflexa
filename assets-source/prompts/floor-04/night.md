# Floor 04 — NIGHT state (bed open, desk closed)

## Option A — image editing / image-to-image (strongly preferred)

Use the generated `afternoon.png` as the reference/input image and give
this edit instruction:

```
Edit this exact photograph. Keep the camera angle, lens, framing, room
architecture, walls, flooring, ceiling, sofa, side table, rug, plant, and
the LEFT wall cabinet completely unchanged and closed, pixel-identical to
the reference image.

Two changes only:
1. The RIGHT wall cabinet has folded open into a Murphy-style wall bed.
   The wood panel (same light oak veneer, same grain, same
   brushed-aluminum trim) is now the headboard, hinged at the top and
   swung down to horizontal, resting on a folded-out white
   powder-coated tubular steel leg frame at the foot end, small orange
   rubber pads visible on the folding hinge rail. A clean single
   mattress with a plain white fitted sheet sits on the frame, one white
   pillow at the head end, a neutral throw folded at the foot.
2. It is now night: the out-of-frame window shows a dark exterior (no
   daylight), the room is lit only by warm artificial light — the floor
   lamp in the back right corner is now ON, casting a warm soft glow
   (~2700K), and the recessed ceiling downlight is on at low warmth too.
   Shadows are softer and warmer than the reference. Everything else —
   architecture, fixed furniture, the closed left cabinet — stays exactly
   as in the reference image.
```

## Option B — text-to-image only

Copy the full `afternoon.md` prompt, change the lighting paragraph to
"night scene, out-of-frame window shows a dark exterior, room lit by warm
artificial light only (~2700K): the floor lamp in the back right corner
is on, recessed ceiling downlight on at low warmth, soft warm shadows",
then replace only the RIGHT cabinet description with:

```
RIGHT cabinet — OPEN state: folded open into a Murphy-style wall bed. The
wood panel (light oak veneer, brushed-aluminum trim) is the headboard,
hinged at the top and swung down to horizontal, resting at the foot end
on a folded-out white powder-coated tubular steel leg frame, small orange
rubber pads visible on the folding hinge rail. A single mattress with a
plain white fitted sheet, one white pillow near the headboard, a neutral
throw folded at the foot. The empty wood cabinet box remains visible as a
frame around the bed, same wood finish, same 140cm width, same wall
position.
```

Keep the LEFT cabinet exactly as described in `afternoon.md` (closed,
100cm, same position).

## Mechanism reference (for all three states)

Same hardware family throughout: wood panel hinged at wall/top, white
metal folding leg frame visible when open, orange rubber pads on the
hinge rail, surface/mattress resting flat and level, no floating parts,
no impossible geometry.
