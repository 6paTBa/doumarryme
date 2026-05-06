import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import { colors, fonts } from "../constants/tokens";

interface Props {
  onNext: () => void;
}

export default function WelcomeScreen({ onNext }: Props) {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -40,
          right: -30,
          fontSize: 140,
          color: colors.primary,
          opacity: 0.055,
          userSelect: "none",
        }}
      >
        ♡
      </div>

      <Eyebrow>для тебя</Eyebrow>

      {/* ✏️ Edit heading */}
      <h1
        style={{
          fontFamily: fonts.display,
          fontWeight: 300,
          fontSize: "clamp(28px, 4.5vw, 48px)",
          color: colors.primaryDeep,
          textAlign: "center",
          lineHeight: 1.3,
          maxWidth: 560,
        }}
      >
        Почему ты должна стать{" "}
        <em style={{ fontStyle: "italic", color: colors.primaryDark }}>
          моей девушкой?
        </em>
      </h1>

      {/* ✏️ Edit subtitle */}
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: 14,
          color: colors.primaryMid,
          opacity: 0.6,
          marginTop: 14,
          textAlign: "center",
        }}
      >
        Я собрал несколько причин. Просто посмотри.
      </p>

      <Button onClick={onNext} style={{ marginTop: 44 }}>
        Далее →
      </Button>
    </>
  );
}
