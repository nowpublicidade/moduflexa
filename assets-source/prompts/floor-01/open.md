# Floor 01 — OPEN state (bed folded down)

## Option A — image editing / image-to-image (strongly preferred)

Use the generated `closed.png` as the reference/input image and give this
edit instruction:

```
Edit this exact photograph. Keep the camera angle, lens, framing, room
architecture, walls, flooring, ceiling light, sofa, coffee table, rug,
plant, wall art, floor lamp, and all lighting and shadows completely
unchanged, pixel-identical to the reference image.

The only change: the wall-mounted wood cabinet in the center has folded
open into a Murphy-style wall bed. The wood panel (same light oak veneer,
same grain, same brushed-aluminum trim) is now the headboard, hinged at
the top and swung down to horizontal, resting on a folded-out white
powder-coated tubular steel leg frame at the foot end, visible small
orange rubber pads on the folding hinge rail where the panel meets the
frame. A clean single mattress with a plain white fitted sheet sits on top
of the frame, one white pillow at the head end near the cabinet, top
sheet or thin neutral throw folded neatly at the foot. The cabinet
surround (the empty wood box frame that housed the bed) stays visible
around the now-horizontal bed, same wood finish as before. Nothing else
in the room moves or changes.
```

## Option B — text-to-image only (if your tool can't edit a reference image)

Use the exact same opening paragraphs as `closed.md` (architecture,
furniture, decor, camera, lighting — copy them verbatim), then replace
the "Main furniture piece" paragraph with this:

```
Main furniture piece — OPEN state (centered on the back wall, hero
subject, fully in frame, well lit): the same tall wall-mounted cabinet in
light oak wood veneer, brushed-aluminum trim, now folded open into a
Murphy-style wall bed. The wood panel is the headboard, hinged at the top
of the cabinet frame and swung down to horizontal, resting at the foot end
on a folded-out white powder-coated tubular steel leg frame (visible
straight tube legs with small floor-contact feet, angled support brace).
Small orange rubber pads are visible on the folding hinge rail where the
panel meets the frame. A single mattress with a plain white fitted sheet
sits on the frame, one white pillow near the headboard, a thin neutral
throw folded at the foot. The empty wood cabinet box that used to house
the bed remains visible as a frame around the now-horizontal bed, exact
same wood finish, same 140cm width, same wall position as the closed
version. Bed height off the floor roughly 45cm.

Overall mood: sophisticated, warm, minimal, residential, believable —
exactly like a real furniture brand's editorial catalog photo, not a
render, not CGI-looking, not oversaturated. Sharp focus throughout,
natural depth of field (f/8 equivalent). Aspect ratio 3:2, landscape.

No people. No text or logos anywhere in the image. No visible brand names.
```

## Mechanism reference (for either option)

The fold-down mechanism should look like a real wall/Murphy bed: wood
panel hinged at the top, white metal folding leg frame visible at the
foot when open, mattress resting flat and level, no floating parts, no
impossible geometry, nothing crossing through the sofa. If your tool
supports a reference image for the mechanism itself (not the room), the
product photos already shared in this conversation are the correct
geometry to match.
