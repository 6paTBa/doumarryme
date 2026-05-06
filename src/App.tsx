import { useRef } from "react";

import BackgroundLayer from "./components/BackgroundLayer";
import Blobs from "./components/Blobs";
import ProgressDots from "./components/ProgressDots";
import type { ScreenState } from "./components/Screen";
import Screen from "./components/Screen";

import CelebrationScreen from "./screens/CelebrationScreen";
import MomentsScreen from "./screens/MomentsScreen";
import QuestionScreen from "./screens/QuestionScreen";
import ReasonsScreen from "./screens/ReasonsScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

import { usePetals } from "./hooks/usePetals";
import { useSlider } from "./hooks/useSlider";
import GradeScreen from "./screens/GradeScreen";

function screenState(index: number, current: number): ScreenState {
  if (index === current) return "visible";
  if (index < current) return "hidden-left";
  return "hidden-right";
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { current, goTo, total } = useSlider();
  const { spawnPetals } = usePetals();

  const handleYes = () => {
    goTo(6);
    spawnPetals(containerRef.current);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <BackgroundLayer current={current} />
      <Blobs />

      <Screen state={screenState(1, current)}>
        <WelcomeScreen onNext={() => goTo(2)} />
      </Screen>

      <Screen state={screenState(2, current)}>
        <ReasonsScreen onNext={() => goTo(3)} onPrev={() => goTo(1)} />
      </Screen>

      <Screen state={screenState(3, current)}>
        <MomentsScreen onNext={() => goTo(4)} onPrev={() => goTo(2)} />
      </Screen>

      <Screen state={screenState(4, current)}>
        <GradeScreen onNext={() => goTo(5)} onPrev={() => goTo(3)} />
      </Screen>

      <Screen state={screenState(5, current)}>
        <QuestionScreen onYes={handleYes} containerRef={containerRef} />
      </Screen>

      <Screen state={screenState(6, current)}>
        <CelebrationScreen containerRef={containerRef} active={current == 6} />
      </Screen>

      <ProgressDots current={current} total={total} />
    </div>
  );
}
