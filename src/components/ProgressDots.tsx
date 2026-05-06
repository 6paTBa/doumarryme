import { colors, transitions } from "../constants/tokens";

interface Props {
  current: number;
  total: number;
}

export default function ProgressDots({ current, total }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 28,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 8,
        zIndex: 10,
      }}
    >
      {Array.from({ length: total }, (_, i) => {
        const active = current === i + 1;

        return (
          <div
            key={i}
            style={{
              height: 7,
              width: active ? 22 : 7,
              borderRadius: active ? 4 : "50%",
              background: active ? colors.primary : `${colors.primaryMid}33`,
              transition: `width ${transitions.fast}, background ${transitions.fast}`,
            }}
          />
        );
      })}
    </div>
  );
}
