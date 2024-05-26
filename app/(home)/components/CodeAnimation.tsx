'use client';

import useCanvas from '@/hook/useCanvas';
import animateLandingText from '@/utils/animateLandingText';

interface Props {
  canvasWidth: number;
  canvasHeight: number;
  isSmallScreen: boolean;
}

export default function CodeAnimation({
  canvasWidth,
  canvasHeight,
  isSmallScreen,
}: Props) {
  const canvasRef = useCanvas(
    canvasWidth,
    canvasHeight,
    animateLandingText,
    isSmallScreen
  );

  return <canvas ref={canvasRef} />;
}
