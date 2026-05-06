import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import ReasonCard from "../components/ReasonCard";
import { reasons } from "../constants/content";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}
export default function ReasonsScreen({ onNext, onPrev }: Props) {
  const isSmall = window.innerWidth < 600;

  return (
    <>
      <Eyebrow>причины</Eyebrow>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmall ? "1fr" : "repeat(3, 300px)",
          gridAutoRows: "auto",
          gap: 14,
          width: "100%",
          maxWidth: isSmall ? "100%" : 300 * 3,
          marginTop: 4,
          padding: "8px 0",
          overflowY: isSmall ? "auto" : "visible",
        }}
      >
        {reasons.map((r) => (
          <ReasonCard key={r.num} num={r.num} text={r.text} />
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <BackButton onClick={onPrev} style={{ marginTop: 28 }} />
        <Button onClick={onNext} style={{ marginTop: 28 }}>
          Это ещё не всё →
        </Button>
      </div>
    </>
  );
}
