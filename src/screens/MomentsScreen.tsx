import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import TimelineItem from "../components/TimelineItem";
import { moments } from "../constants/content";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function MomentsScreen({ onNext, onPrev }: Props) {
  return (
    <>
      <Eyebrow>моменты</Eyebrow>

      {/* ✏️ Edit moments in src/constants/content.ts */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 420,
          width: "100%",
          marginTop: 4,
        }}
      >
        {moments.map((m, i) => (
          <TimelineItem
            key={i}
            icon={m.icon}
            title={m.title}
            desc={m.desc}
            isLast={i === moments.length - 1}
          />
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <BackButton onClick={onPrev} style={{ marginTop: 28 }} />
        <Button onClick={onNext} style={{ marginTop: 28 }}>
          Еще чуть чуть →
        </Button>
      </div>
    </>
  );
}
