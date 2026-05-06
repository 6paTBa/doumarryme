import type { CSSProperties } from "react";
import { useState } from "react";
import { fonts, radii } from "../constants/tokens";

interface Props {
  onClick: () => void;
  style?: CSSProperties;
}

export default function BackButton({ onClick, style: extraStyle }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "6px 12px",

        // 🌸 нежный розовый glass-gradient
        background: hovered
          ? "linear-gradient(135deg, rgba(255, 182, 193, 0.28), rgba(255, 192, 203, 0.18))"
          : "linear-gradient(135deg, rgba(255, 182, 193, 0.18), rgba(255, 192, 203, 0.10))",

        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",

        border: "1px solid rgba(255, 255, 255, 0.25)",

        borderRadius: radii.pill,
        fontFamily: fonts.body,
        fontSize: 12,
        letterSpacing: "0.2px",

        color: "rgba(255, 255, 255, 0.85)",

        cursor: "pointer",

        boxShadow: hovered
          ? "0 8px 18px rgba(255, 105, 135, 0.15)"
          : "0 4px 12px rgba(0, 0, 0, 0.08)",

        opacity: hovered ? 1 : 0.75,
        transform: hovered ? "translateY(-1px)" : "none",

        transition: "all 0.2s ease",

        display: "inline-flex",
        alignItems: "center",
        gap: "6px",

        ...extraStyle,
      }}
    >
      <span style={{ fontSize: 14, lineHeight: 1 }}>← Назад</span>
    </button>
  );
}
