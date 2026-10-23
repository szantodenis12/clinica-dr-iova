# img/gen — prompt log (Clinica Dr. Iova site mockup)

Generated 21.10.2026 with Higgsfield CLI. Internal doc, English.

## Model choice
Test prompt (adult psychiatry armchair) run on **nano_banana_pro** (4:5, 2k) and **seedream_v5_pro** (3:4, 2k).
Nano Banana Pro = sharper, but reads like catalogue stock. Seedream 5.0 Pro = airy, film-like pastel grade that matches the Synora reference and the site's soft blue/mint/sand gradients. **Whole series = `seedream_v5_pro`, resolution 2k.** Seedream has no 4:5 or 16:10, so service cards were generated 3:4 and cover-cropped to 1600×2000; blog covers 16:9 cropped to 1600×1000; hero 16:9 resized to 1920×1080. All JPG q85, progressive.

Note: Higgsfield rate-limits parallel submissions on the same model ("rate_limit_reached" even under the 8-job cap). Run jobs sequentially.

## Shared style suffix (appended to every prompt)
> Editorial still-life photograph, medium format camera, 80mm lens, soft diffused morning daylight, airy and calm, hopeful mood. Colour grade: pale sky blue and soft mint highlights, warm sand neutrals, one small touch of burnt orange. Shallow depth of field, matte highlights, very fine film grain, natural imperfections, no CGI look. [service cards only: The lower third of the frame is calm and uncluttered, a soft out-of-focus plain surface.] No people, no faces, no text, no letters, no numbers, no logos, no watermark. Full-bleed, no border, no frame.

Rules applied: no faces (hands only in one shot), no brains / puzzle heads / stethoscopes / pills / sad-person clichés, no text, no frames. Service cards keep the bottom 40% quiet for the white text + blue gradient overlay.

## Service cards (1600×2000, 4:5)

**serv-psihiatrie-adulti.jpg** — seedream_v5_pro 3:4 2k
> An empty light-grey linen armchair beside a tall window with a sheer white curtain, morning light falling softly across the seat, a clear glass of water and a small folded wool throw in burnt orange on a pale wooden side table, pale blue painted wall. + style

**serv-psihiatrie-pediatrica.jpg** — seedream_v5_pro 3:4 2k (crop biased to top, vshift 0.4)
> Close-up from above at a slight angle: a small child's hand and an adult's hand placing smooth pale wooden building blocks together on a light wooden table, the blocks painted in soft dusty blue, mint and sand, one block burnt orange, sleeves of soft pale linen, only hands and forearms visible, no faces, warm and quiet, natural anatomically correct hands with five fingers. + style

**serv-neurologie.jpg** — seedream_v5_pro 3:4 2k
> Macro photograph of a few delicate translucent fibre-optic threads glowing softly in pale sky blue and mint, branching gently like fine roots, floating in a bright hazy white-and-blue space, extremely shallow depth of field, soft round bokeh, quiet and scientific but gentle, abstract, the threads concentrated in the upper two thirds of the frame. + style

**serv-psihologie.jpg** — seedream_v5_pro 3:4 2k (v2; v1 had "a thin line of burnt orange at the edge of the frame" which rendered as a border strip, dropped)
> A single drop of pale blue ink slowly diffusing into a clear glass vessel of still water, soft sky-blue and mint tendrils unfurling gently, the glass standing on a warm sand-coloured linen cloth, behind it a softly out-of-focus pale blue wall with sheer window light, bright soft side daylight, macro, calm and slow, a small smooth burnt-orange pebble resting beside the glass. + style

**serv-logopedie.jpg** — seedream_v5_pro 3:4 2k
> Still water in a shallow wide pale ceramic bowl, a few concentric ripples spreading from the centre like sound waves, soft reflections of sky blue and mint light moving on the water surface, the bowl standing on a warm sand-coloured linen cloth, photographed from a high angle, calm and quiet. + style

## Blog covers (1600×1000, 16:10, generated 16:9)

**blog-cand-mergem-la-psihiatru.jpg**
> A pair of simple reading glasses resting on a closed pale linen-bound notebook on a light wooden desk, a clear glass of water beside it, pale blue wall, and in the soft out-of-focus background a white door standing slightly open with daylight coming through, quiet and hopeful. + style

**blog-psihiatru-psiholog-psihoterapeut-diferente.jpg**
> Three simple handmade ceramic cups of slightly different shapes, one pale sky blue, one soft mint, one warm sand, standing in a row on a light wooden shelf against a pale blue wall, soft window light from the left, a tiny burnt-orange ceramic detail on one cup, quiet and orderly. + style

**blog-repere-dezvoltare-limbaj-copii-0-5-ani.jpg** (v2; v1 had an orange paint-drip artefact on the tallest block)
> A row of five smooth plain wooden blocks of gradually increasing height standing in a line on a warm sand-coloured linen cloth, the blocks painted in clean solid colours: pale wood, soft mint, pale sky blue, warm sand, and the tallest one a small solid burnt-orange block at the end, each block one flat colour with no marks, no drips, no stains, pale blue wall behind, soft side daylight, calm and simple. + style (without "one small touch of burnt orange")

**blog-evaluare-psihiatrica-copil-ce-presupune.jpg**
> A small child's pale wooden chair beside a larger adult chair at a low light wooden table, on the table a few blank white sheets of paper and three coloured pencils in sky blue, mint and burnt orange, bright quiet room with a pale blue wall and sheer curtain light, empty chairs, nobody present. + style

**blog-consultatie-psihiatrie-cas-bilet-trimitere.jpg**
> A plain blank folded sheet of white paper and a pale blue paper envelope lying on a light wooden reception counter, next to a small green plant in a sand-coloured ceramic pot, soft daylight from a window, out-of-focus pale interior behind, orderly and calm, the paper completely blank with no writing. + style

**blog-aviz-psihologic-permis-arma-pasi.jpg** (deliberately no weapon imagery; "steps" metaphor)
> Three smooth pale grey river stones of increasing size placed in a straight line on a warm sand-coloured linen surface, a pale blue seamless backdrop behind, soft side daylight casting gentle shadows, one small burnt-orange pebble at the end of the line, calm, orderly, step by step. + style

## Background

**hero-texture.jpg** (1920×1080) — seedream_v5_pro 16:9 2k (v2; v1's mint band was too saturated)
> Abstract photograph of soft morning light on a plain white wall: a faint wash of pale sky blue in the upper left, a barely visible hint of mint, and a gentle warm sand glow in the lower right, mostly white and very bright, extremely subtle and smooth gradients, like light through frosted glass, no objects, no shapes, no hard edges, no texture detail, no text, no logos, full-bleed, no border, no frame.

## Credits
16 jobs total (2 model tests + 11 finals + 3 regens): 564.13 → 421.13 credits = **143 credits**.
