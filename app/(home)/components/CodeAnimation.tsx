'use client';

import useCanvas from '@/hook/useCanvas';
import animateLandingText from '@/utils/animateLandingText';

interface Props {
  canvasWidth: number;
  canvasHeight: number;
  isSmallScreen: boolean;
  handleAnimationFlag: (flag: boolean) => void;
}

export default function CodeAnimation({
  canvasWidth,
  canvasHeight,
  isSmallScreen,
  handleAnimationFlag,
}: Props) {
  const canvasRef = useCanvas(
    canvasWidth,
    canvasHeight,
    animateLandingText,
    isSmallScreen,
    handleAnimationFlag
  );

  return <canvas ref={canvasRef} />;
}
