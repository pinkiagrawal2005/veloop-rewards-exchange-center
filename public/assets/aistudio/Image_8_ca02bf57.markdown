---
name: Premium Vault Loyalty
colors:
  surface: '#101221'
  surface-dim: '#101221'
  surface-bright: '#363849'
  surface-container-lowest: '#0b0d1c'
  surface-container-low: '#191b2a'
  surface-container: '#1d1f2e'
  surface-container-high: '#272939'
  surface-container-highest: '#323444'
  on-surface: '#e1e1f6'
  on-surface-variant: '#d2c5b1'
  inverse-surface: '#e1e1f6'
  inverse-on-surface: '#2d2f3f'
  outline: '#9b8f7d'
  outline-variant: '#4e4636'
  surface-tint: '#f0bf58'
  primary: '#ffd277'
  on-primary: '#402d00'
  primary-container: '#e5b54f'
  on-primary-container: '#624700'
  inverse-primary: '#7a5900'
  secondary: '#d2bbff'
  on-secondary: '#3e008e'
  secondary-container: '#5c03cb'
  on-secondary-container: '#c6aaff'
  tertiary: '#d3d6fc'
  on-tertiary: '#2a2e4c'
  tertiary-container: '#b7badf'
  on-tertiary-container: '#464a69'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea2'
  primary-fixed-dim: '#f0bf58'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5c4200'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#dfe0ff'
  tertiary-fixed-dim: '#c1c4e9'
  on-tertiary-fixed: '#151936'
  on-tertiary-fixed-variant: '#414564'
  background: '#101221'
  on-background: '#e1e1f6'
  surface-variant: '#323444'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system embodies an elite, vault-like gamified rewards atmosphere. Built for discerning users redeeming platform activities into high-tier virtual perks, the interface creates an aura of prestige, tangible accomplishment, and digital luxury. 

The aesthetic marries **dark luxury minimalism** with **enchanted skeuomorphic luminescence**. Deep twilight and obsidian surfaces provide an uncompromised dark canvas that makes glowing amethyst reward gems and warm gilded coins radiate with intrinsic value. Unlike speculative crypto platforms or sterile fintech dashboards, the emotional resonance here is rooted in security, celebration, and premium membership rewards. High-fidelity glass surfaces, ultra-fine hairline rim lighting, and measured jewel tones convey institutional trust combined with immersive reward gratification.

## Colors

The palette establishes an opulent twilight hierarchy:

- **Primary (`#e5b54f` - Imperial Gold):** Reserved for primary reward values, currency icons (VEs), confirmation buttons, and glowing tier accents. Highlights range upward to warm brilliance (`#f5c868`).
- **Secondary (`#9055ff` - Amethyst Purple):** Drives the mystical gem identity, glowing status indicators, conversion directional glows, and interactive badges. Scales into deep violet (`#7a3be6`).
- **Tertiary Surface Layer (`#212542` to `#1c1f36`):** Deep twilight navy structural containers that stage content with layered dimensional depth.
- **Neutral Canvas Base (`#161827`):** The obsidian foundation that prevents eye fatigue and provides an infinite-depth backdrop.
- **Text & Accents:** High-legibility crisp off-white (`#f3f4f8`) ensures pristine readability against dark substrates, supported by a sophisticated muted secondary tint (`#9da3be`) for instructional copy, metadata, and neutral states.

## Typography

The design system standardizes on **Plus Jakarta Sans** across all textual hierarchies. Its geometric construction, generous counters, and crisp terminal cuts ensure absolute clarity across dark layers while lending an approachable, contemporary character. 

Numbers and currency amounts utilize semi-bold to bold weights with tight letter-spacing to emphasize magnitude without visual distortion. Informational microcopy, tooltips, and conversion terms leverage `body-sm` and `label-sm` with slightly widened tracking for elevated legibility over deep twilight backdrops.

## Layout & Spacing

The layout is built on a responsive 12-column grid system tailored for command dashboards and exchange centers:

- **Desktop (1280px+):** Fixed 240px collateral navigation sidebar paired with a 12-column dynamic flex workspace. Content spans structured panels using `gutter: 1.25rem` (20px) with outer canvas margin of `2rem` (32px).
- **Tablet (768px - 1279px):** Sidebar condenses to an icon-rail (72px) or collapsible flyout drawer. Primary exchange hero stages flow into two stacked 6-column groups; secondary feeds reflow underneath.
- **Mobile (< 768px):** Single-column fluid linear layout with sticky bottom action controls, utilizing `margin-mobile: 1rem` and `gutter-mobile: 0.75rem`.

The vertical rhythm strictly adheres to an 8px modular baseline (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 32px), guaranteeing proportioned groupings across cards, balance headers, and rate tiles.

## Elevation & Depth

Visual hierarchy does not rely on harsh drop shadows; instead, it utilizes luminous atmospheric stacking:

1. **Substrate Base (Level 0):** Solid `#161827`. Absorbs light and anchors the entire viewport.
2. **Structural Panels (Level 1):** Flat `#1c1f36` with a delicate hairline perimeter stroke of `rgba(255, 255, 255, 0.06)` to delineate panel edges without creating high visual contrast.
3. **Interactive Cards & Tiles (Level 2):** Elevated `#212542` with `rgba(255, 255, 255, 0.08)` borders. When focused or hovered, cards emit an internal edge glow (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 8px 24px rgba(0, 0, 0, 0.45)`).
4. **Hero Stage & Portals (Level 3):** Radial ambient under-glows tinted to the asset's nature: warm gold blooms (`rgba(229, 181, 79, 0.15)`) around coin vaults, and amethyst nebulas (`rgba(144, 85, 255, 0.20)`) behind gem reservoirs.
5. **Modals & Overlays (Level 4):** Deep background blur (`backdrop-filter: blur(16px)`) with frosted twilight layers (`rgba(28, 31, 54, 0.85)`), held by a metallic gradient outline transitioning smoothly from `rgba(229, 181, 79, 0.3)` to `rgba(144, 85, 255, 0.1)`.

## Shapes

The interface balances sleek structural ergonomics with gentle softness:

- **Cards & Primary Modules:** Standardized at `rounded-lg` (16px to 20px) radius, giving panels a polished, stone-cut feel.
- **Conversion Cards & Mini Tiles:** 16px corners create soft framed pockets for gems, exchange flows, and balance indicators.
- **Interactive Controls & Badges:** Primary conversion buttons and pill counters utilize either fully rounded pill geometry (`rounded-full`) or medium softness (8px to 10px) to invite tactile engagement.
- **Avatars & Token Markers:** Strict circular geometry (`rounded-full`) reinforces coin tokens, level indicators, and gem badges.

## Components

### Buttons
- **Primary Reward Exchange Button:** Radiant gold gradient background (`linear-gradient(135deg, #f5c868 0%, #e5b54f 100%)`) with dark charcoal text (`#161827`, 700 weight), a soft inner top highlight, and hover scale transition with subtle gold bloom (`box-shadow: 0 4px 16px rgba(229, 181, 79, 0.35)`).
- **Secondary / Gem Action Button:** Deep amethyst sheen (`linear-gradient(135deg, #9055ff 0%, #7a3be6 100%)`) with white text (`#ffffff`), ideal for gem-specific tasks.
- **Tertiary / Outline Button:** Surface container `#212542` with `1px solid rgba(255, 255, 255, 0.12)` and off-white text (`#f3f4f8`), brightening to `rgba(255, 255, 255, 0.2)` on hover.

### Conversion & Reward Cards
- Feature a layered twilight card body with subtle top-to-bottom shading (`#212542` to `#1c1f36`).
- Include distinct gem-to-coin transformation pathways: miniature gem asset, luminous arrow pointer (`→`), and gilded VE coin crest.
- Display numeric balance values in crisp high-contrast off-white, supported by subtle helper subtext in `#9da3be`.
- Include tier-specific accent tags (e.g., "Popular", "Value") styled as frosted translucent badges.

### Chips & Badges
- **Status & Trend Chips:** Pill containers with translucent jewel-tone fills (`rgba(144, 85, 255, 0.15)` for gems, `rgba(46, 213, 115, 0.15)` for completed transactions).
- **Level & Membership Badges:** Rounded hexagonal or circular pill pins carrying radiant amethyst borders and crisp micro-typography (`label-sm`).

### Balance & Metric Vaults
- Dedicated showcase pods featuring glassmorphic depth (`rgba(255, 255, 255, 0.04)` fill, `1px solid rgba(255, 255, 255, 0.08)`).
- Accommodate 3D render assets with glowing backlights, paired with large-scale tabular numeric readouts for available Gems and VEs.

### Lists & History Tables
- Horizontal row items wrapped in soft rounded containers or divided by hairline borders (`rgba(255, 255, 255, 0.05)`).
- Provide immediate visual confirmation with green-toned completion markers (`#2ed573`) or amber pending statuses.

### Input Fields & Selectors
- Recessed backgrounds (`#161827`) with `1.5px solid rgba(255, 255, 255, 0.1)`.
- On focus: shifts border color to primary gold (`#e5b54f`) with an ambient outer glow (`0 0 0 3px rgba(229, 181, 79, 0.15)`).