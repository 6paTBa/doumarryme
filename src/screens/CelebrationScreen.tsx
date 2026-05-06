import type { RefObject } from "react";
import { useEffect } from "react";
import { colors, fonts } from "../constants/tokens";
import { usePetals } from "../hooks/usePetals";

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
  active: boolean;
}

export default function CelebrationScreen({ containerRef, active }: Props) {
  const { spawnPetals } = usePetals();

  useEffect(() => {
    if (!active) return;
    spawnPetals(containerRef.current);
  }, [spawnPetals, containerRef]);

  return (
    <>
      <div style={{ fontSize: 64, marginBottom: 18 }}>🌸</div>

      {/* ✏️ Edit celebration text */}
      <p
        style={{
          fontFamily: fonts.display,
          fontSize: "clamp(30px, 5vw, 48px)",
          fontWeight: 300,
          color: colors.primaryDeep,
          textAlign: "center",
          lineHeight: 1.25,
        }}
      >
        Обещаю я сделаю тебя{" "}
        <em style={{ fontStyle: "italic" }}>самой счастливой</em>
      </p>

      <p
        style={{
          fontFamily: fonts.body,
          fontSize: 14,
          color: colors.primaryMid,
          opacity: 0.6,
          marginTop: 12,
          textAlign: "center",
          maxWidth: 340,
        }}
      >
        это начало чего-то очень хорошего и счастливого
      </p>
    </>
  );
}
