# MOBILE-CHANGES (23.10.2026): mobile/tablet CSS pass

This pass changes CSS only. Markup, content and JS are unchanged. Every rule sits inside a media query of 1024px or less, so desktop is unchanged: a 1440px full-page pixel diff of all 37 routes, before and after, showed 0 differing pixels.

To mirror these changes into the static site (`clinica-dr-iova-site/assets/css/`), apply the same edits to the same file names. Only `mobile.css` and `medici.css` changed.

**Next-only notes.** Each one is also marked inline below.
- `.page-xxx` selectors: in Next the page class is on the wrapper `<div class="site page-xxx">`. In the static site it is on `<body>`, so `.page-home …`, `.page-programare …` and `.page-admin …` work unchanged there (`body.page-x .foo` is matched by `.page-x .foo`).
- `.site:not(.page-admin) footer` already existed in Next's mobile.css. The static original has `body:not(.page-admin) footer`; keep the `body:` form there.
- No rule depends on `html.has-anim`.
- `.marq` / `.marq-track` / `.is-clone` (doctors slider): in Next the markup comes from the React component `components/home/DoctorsMarquee.tsx`, and the static site's `home.js` builds the same `.marq > .marq-track > .dcard(.is-clone)` structure. The rules use `transform:none!important` to override the inline transform that the JS writes every 3 seconds. That works the same way in both versions. Checked: the static `assets/js/home.js` also adds `.is-clone` to the clones (line 14).

---

## 1. `src/styles/medici.css`: changed in place

| Where | Before | After |
|---|---|---|
| `@media (max-width:700px)` → `.md-filters button` | `height:40px;padding:0 14px;font-size:12px` | `height:44px;padding:0 14px;font-size:12px` (tap target) |

## 2. `src/styles/mobile.css`: changed in place (existing `@media (max-width:700px)` block at the top)

| Rule | Before | After | Why |
|---|---|---|---|
| `.nav-burger` | `width:42px;height:42px` | `width:44px;height:44px` | tap target |
| `.wa-panel` | `bottom:86px` | `bottom:calc(86px + env(safe-area-inset-bottom,0px));max-height:calc(100dvh - 162px - env(safe-area-inset-bottom,0px))` | sits above the bottom bar on iPhones with a home indicator; never slides under the top bar |
| `.site:not(.page-admin) footer` **(Next: `.site`; static: `body`)** | `padding-bottom:100px` | `padding-bottom:calc(100px + env(safe-area-inset-bottom,0px))` | safe area |
| `.ck` | `bottom:84px` | `bottom:calc(86px + env(safe-area-inset-bottom,0px));max-height:calc(100dvh - 160px - env(safe-area-inset-bottom,0px))` | cookie sheet clears the bottom bar (bar top = 10 + 64px) plus the safe area |
| `html,body` | `overflow-x:hidden` | `overflow-x:hidden;overflow-x:clip` | `hidden` on both html and body turns body into a scroll container and breaks `position:sticky` (needed for the booking bar). Browsers without `clip` keep `hidden`. |

## 3. `src/styles/mobile.css`: new block appended at the end of the file

Paste it verbatim at the end of the static `mobile.css`.

### 3a. `@media (max-width:1024px)`, phones and tablets
```css
.ways,.contact-photos,.answer,.two,.cas-steps,.docs,.cas-faq,.story,.team-sum,.founder,.values,.space,.reviews-link,.featured,.blog-note{padding-left:var(--pad)!important;padding-right:var(--pad)!important}
.page-home #specialitati,.page-home #recenzii,.page-home #clinica,.page-home .faq-sec{overflow-x:clip}
.arrows button{width:64px;height:64px}
.arrows.sm button{width:64px;height:56px}
.page-home .steps .step{min-height:0}
.page-home .steps .step .foot{margin-top:10px}
.md-card h3,.md-card .role{white-space:normal;text-overflow:clip;text-wrap:balance}
.md-card .info{min-height:0}
.page-home .dcard .role{white-space:normal}
.prog-steps li span{display:none}
.prog-steps li.is-current span{display:block}
.prog-steps{grid-template-columns:repeat(6,auto);justify-content:space-between}
.toc li a{padding:13px 16px!important}
```
- Gutter fix: on /contact/, /cas/, /despre/ and /blog/ these `<section>` elements carry an inline `style="padding:0"` (in Next, `style={{padding:0}}`). It was meant to cancel the section padding-top, but it also removed the horizontal `var(--pad)`, so headings and cards touched the screen edges. Checked: the static `src/pages/{cas,contact,despre}/index.html` and `blog/*.html` have the same inline `style="padding:0"`, so the same rule fixes them. In the blog articles, verify which section classes carry it and add them to the selector if they are not listed. **Desktop has the same bug** (left as is, see the report).
- The background brains (`.bgb`) were 100-300px outside the viewport at 701-1024px. They are now clipped inside their section.
- `.page-home .dcard .role` stops truncating "Medic specialist psihiatrie pediatrică".
- The booking step labels showed truncated text such as "Dată și in…" at 768px. Now only the current step's label shows, which was already the phone behaviour.

### 3b. `@media (min-width:701px) and (max-width:1024px)`, tablet hero
```css
.page-home .hero-doc{height:76%;right:-12%}
.page-home .hero .bottom p{max-width:54%}
.page-home .stats{gap:10px}
.page-home .stats>div{background:rgba(13,22,45,.3);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-radius:12px;padding:10px 14px}
```
The hero paragraph ran over Dr. Iova's arms, and the white stats sat on a pale gradient. The doctor is now smaller and further right, and the stats sit on dark glass chips.

### 3c. `@media (max-width:700px),(max-width:1024px) and (hover:none)`, doctors slider (**React component in Next, `home.js` in static; see the notes above**)
```css
.marq{overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scroll-padding-inline:var(--pad);scrollbar-width:none;-webkit-mask-image:none;mask-image:none;padding:4px 0 12px}
.marq::-webkit-scrollbar{display:none}
.marq-track{transform:none!important;transition:none!important;padding:0 var(--pad);gap:12px}
.marq .is-clone{display:none}
```
On phones and touch tablets, the auto-stepping marquee becomes a native swipe row with mandatory snap, a 16px gutter and a peek of the next card. There is no edge-fade mask and no clone duplicates. Mouse users from 701 to 1024px keep the marquee.

### 3d. `@media (max-width:700px)`, phones
```css
/* type */
.h2,.page-home .h2{font-size:clamp(28px,8.2vw,34px)}
.phead h1{font-size:clamp(34px,10.4vw,44px)}
.about-hero h1,.cas-hero h1,.blog-head h1{font-size:clamp(32px,9.8vw,40px)}
/* rhythm: 64px between sections */
.page-inner section{padding-top:64px}
.story,.team-sum,.founder,.values,.space,.reviews-link,.ways,.contact-photos,.two,.cas-steps,.docs,.cas-faq{margin-top:64px}
.related,.hub-groups{margin-top:64px}
.sec-head{margin-bottom:32px}
.page-home .banner{margin-top:64px}
.cta-band,.page-inner .cta-band{margin:64px auto}
footer.ft{padding-top:56px}
.ft-top{padding-bottom:40px;gap:32px}
.ft-cols{padding:36px 0 24px}
/* hero stats legible (were white on pale glass) */
.page-home .stats{color:var(--ink)}
.page-home .stats span{opacity:.7}
/* cards */
.page-home .pcard{aspect-ratio:320/420}
.page-home .dcard{flex:0 0 min(76vw,320px)}
.md-mini{scroll-snap-align:start}
.md-others{scroll-snap-type:x mandatory}
.md-mini .n small{white-space:normal}
/* tap targets >= 44px (padding + equal negative margin = bigger hit area, same layout) */
.logo{padding:7px 0;margin:-7px 0}
.ft-logo{padding:3px 0;margin:-3px 0}
.crumbs a{display:inline-block;padding:14px 0;margin:-14px 0}
.ck .row button{height:44px}
.blog-filters button{height:44px}
.map .pin{min-height:44px}
.crow a,.ft-row a,.side-contact a{display:inline-block;padding:12px 0;margin:-12px 0}
.ft-cols ul{gap:0}
.ft-cols a{display:inline-flex;align-items:center;min-height:44px}
.flegal nav{gap:0 22px}
.flegal nav a,.flegal nav button{display:inline-flex;align-items:center;min-height:44px}
.flegal .made{min-height:44px}
.tcard ul{gap:0}
.tcard ul a{min-height:44px}
.cal-nav{width:44px;height:44px}
.art-toc .tools{gap:0 16px}
.art-toc .tools a{min-height:44px}
/* booking: sticky action bar, WhatsApp above it (page class: Next wrapper / static body) */
.page-programare .prog-actions{position:sticky;bottom:0;z-index:5;flex-direction:row;align-items:center;gap:8px;margin:24px -16px -20px;padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px));background:rgba(255,255,255,.92);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-top:1px solid var(--line);border-radius:0 0 14px 14px}
.page-programare .prog-actions .btn{flex:1;padding:0 16px;justify-content:center}
.page-programare .prog-actions #btn-back{flex:0 0 48px;width:48px;padding:0;gap:0;font-size:0}
.page-programare .wa-fab{bottom:calc(88px + env(safe-area-inset-bottom,0px))}
.page-programare .wa-panel{bottom:calc(150px + env(safe-area-inset-bottom,0px));max-height:calc(100dvh - 226px - env(safe-area-inset-bottom,0px))}
.page-programare .ck{bottom:calc(12px + env(safe-area-inset-bottom,0px))}
```
- Booking: the `.prog-actions` bar (Back / Continue / Send) docks to the bottom of the screen while the wizard scrolls. "Înapoi" becomes a 48px icon button; its text stays in the DOM through `font-size:0`, so screen readers still read it. The WhatsApp button moves up 88px so it no longer covers "Continuați". There is no bottom bar on /programare/, so the cookie sheet drops to the bottom of the screen there. The bar needs the `overflow-x:clip` change from section 2.

### 3e. `@media (max-width:900px)`, admin (its phone layout starts at 900px)
```css
.page-admin .top-actions{flex-wrap:nowrap}
.page-admin .search{flex:1 1 auto;min-width:0;width:auto;height:44px}
.page-admin .search input{font-size:16px}
.page-admin .adm-main .tbtn{height:44px;min-width:44px;justify-content:center}
.page-admin .adm-user button{width:44px;height:44px}
```
The search field and the three toolbar buttons now fit on one row; before, the "+" button wrapped alone onto a second row. The 16px input font stops iOS from zooming on focus. Logout and toolbar buttons are 44px.
