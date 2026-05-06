# 💗 wife — girlfriend proposal site

React 18 + Vite + TypeScript. All styles are inline style objects — zero CSS files.

## Quick start

```bash
npm install
npm run dev
```

## Project structure

```
src/
├── main.tsx
├── App.tsx                        # Root — wires screens + hooks
│
├── constants/
│   ├── tokens.ts                  # Design tokens (colours, fonts, shadows)
│   └── content.ts                 # All copy — edit text here ✏️
│
├── hooks/
│   ├── useSlider.ts               # Active screen state + goTo()
│   ├── useEscapingButton.ts       # "Нет" button flee logic
│   └── usePetals.ts               # Spawns celebration petals
│
├── components/                    # Reusable, presentational
│   ├── Screen.tsx                 # Slide transition wrapper
│   ├── BackgroundLayer.tsx        # Crossfading gradients
│   ├── Blobs.tsx                  # Decorative blurred circles
│   ├── ProgressDots.tsx           # Bottom nav dots
│   ├── Button.tsx                 # Primary pill button
│   ├── Eyebrow.tsx                # Small uppercase label
│   ├── ReasonCard.tsx             # Card in ReasonsScreen
│   └── TimelineItem.tsx           # Row in MomentsScreen
│
└── screens/                       # Full-screen page components
    ├── WelcomeScreen.tsx
    ├── ReasonsScreen.tsx
    ├── MomentsScreen.tsx
    ├── QuestionScreen.tsx
    └── CelebrationScreen.tsx
```

## Editing content

Everything you want to change lives in **`src/constants/content.ts`**:
- `reasons` — the 4 reason cards
- `moments` — the 3 timeline items  
- `noButtonLabels` — what the "Нет" button says as it runs away

Colours, fonts, and shadows → **`src/constants/tokens.ts`**.

## Deploy

```bash
npm run build   # → dist/
```

Drag `dist/` onto [netlify.com/drop](https://app.netlify.com/drop) and send her the link.
