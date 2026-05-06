import { useState } from "react";

import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import { colors, fonts } from "../constants/tokens";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function GradeScreen({ onNext, onPrev }: Props) {
  const [value, setValue] = useState(5);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value);

    if (next < value && next < 9) {
      return;
    }

    if (next > value) {
      setValue(next);
      return;
    }

    if (next < 9) {
      setValue(9);
      return;
    }

    setValue(next);
  };

  return (
    <>
      <Eyebrow>насколько я тебе нравлясь</Eyebrow>

      <div
        style={{
          width: "100%",
          maxWidth: 420,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 26,
        }}
      >
        {/* value */}
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: "clamp(72px, 10vw, 110px)",
            lineHeight: 0.9,
            color: colors.primary,
            fontWeight: 400,
            opacity: 0.9,
            textShadow: "0 10px 30px rgba(255, 105, 155, 0.15)",
          }}
        >
          {value.toFixed(1)}
        </div>

        {/* slider row */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* left number */}
          <span
            style={{
              fontFamily: fonts.body,
              fontSize: 16,
              color: colors.primaryDeep,
              opacity: 0.35,
              minWidth: 18,
            }}
          >
            0
          </span>

          {/* slider */}
          <input
            type="range"
            min={0}
            max={10}
            step={0.2}
            value={value}
            onChange={handleChange}
            style={{
              flex: 1,
              cursor: "pointer",
              height: 6,
              appearance: "none",
              borderRadius: 999,
              background:
                "linear-gradient(to right, rgba(255,255,255,0.28), rgba(255,255,255,0.12))",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              outline: "none",
              opacity: 0.8,
            }}
          />

          {/* right number */}
          <span
            style={{
              fontFamily: fonts.body,
              fontSize: 16,
              color: colors.primaryDeep,
              opacity: 0.35,
              minWidth: 24,
              textAlign: "right",
            }}
          >
            10
          </span>
        </div>
      </div>

      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.75);
            border: 1px solid rgba(255,255,255,0.45);
            box-shadow:
              0 4px 18px rgba(255, 105, 155, 0.25),
              inset 0 1px 1px rgba(255,255,255,0.35);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            transition: transform .2s ease;
          }

          input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.08);
          }

          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border: none;
            border-radius: 999px;
            background: rgba(255,255,255,0.75);
            box-shadow:
              0 4px 18px rgba(255, 105, 155, 0.25),
              inset 0 1px 1px rgba(255,255,255,0.35);
          }

          input[type="range"]::-moz-range-track {
            height: 6px;
            border-radius: 999px;
            background: rgba(255,255,255,0.16);
          }
        `}
      </style>

      <div style={{ display: "flex", gap: 10 }}>
        <BackButton onClick={onPrev} style={{ marginTop: 28 }} />
        <Button onClick={onNext} style={{ marginTop: 28 }}>
          Последнее →
        </Button>
      </div>
    </>
  );
}
