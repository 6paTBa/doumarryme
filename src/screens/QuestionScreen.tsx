import type { RefObject } from "react";
import { colors, fonts, radii, shadows } from "../constants/tokens";
import { useEscapingButton } from "../hooks/useEscapingButton";

interface Props {
  onYes: () => void;
  containerRef: RefObject<HTMLDivElement>;
}

export default function QuestionScreen({ onYes, containerRef }: Props) {
  const { label, style: noStyle, onEscape } = useEscapingButton(containerRef);

  return (
    <>
      {/* ✏️ Edit the question */}
      <p
        style={{
          fontFamily: fonts.display,
          fontSize: "clamp(34px, 5.5vw, 56px)",
          fontWeight: 300,
          color: colors.primaryDeep,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        Так какой же <em style={{ fontStyle: "italic" }}>твой ответ?</em>
      </p>

      <p
        style={{
          fontFamily: fonts.body,
          fontSize: 14,
          color: colors.primaryMid,
          opacity: 0.6,
          marginTop: 14,
        }}
      >
        (Я очень надеюсь на правильный)
      </p>

      <div
        style={{
          display: "flex",
          gap: 18,
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <button
          onClick={onYes}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = shadows.btnHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = shadows.btn;
          }}
          style={{
            padding: "17px 56px",
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDeep})`,
            color: colors.white,
            border: "none",
            borderRadius: radii.pill,
            fontFamily: fonts.body,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: shadows.btn,
            transition: "0.2s ease",
          }}
        >
          Да 💗
        </button>

        <button
          onClick={onEscape}
          style={{
            padding: "13px 30px",
            background: "transparent",
            color: colors.primaryMid,
            border: `1.5px solid ${colors.primaryMid}4D`,
            borderRadius: radii.pill,
            fontFamily: fonts.body,
            fontSize: 13,
            cursor: "pointer",
            ...noStyle,
          }}
        >
          {label}
        </button>
      </div>
    </>
  );
}
