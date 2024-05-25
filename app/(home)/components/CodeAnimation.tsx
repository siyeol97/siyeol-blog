'use client';

import useCanvas from '@/hook/useCanvas';
import animateLandingText from '@/utils/animateLandingText';

interface Props {
  canvasWidth: number;
  canvasHeight: number;
}

export default function CodeAnimation({ canvasWidth, canvasHeight }: Props) {
  const canvasRef = useCanvas(canvasWidth, canvasHeight, animateLandingText);

  return <canvas ref={canvasRef} />;
}
