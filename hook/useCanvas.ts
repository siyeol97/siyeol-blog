import { useEffect, useRef } from 'react';

const useCanvas = (
  canvasWidth: number,
  canvasHeight: number,
  animate: (context: CanvasRenderingContext2D) => () => void
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const setCanvas = () => {
      const pixelRatio = window.devicePixelRatio ?? 1;

      if (canvas && context) {
        canvas.style.width = canvasWidth + 'px';
        canvas.style.height = canvasHeight + 'px';

        canvas.width = Math.floor(canvasWidth * pixelRatio);
        canvas.height = Math.floor(canvasHeight * pixelRatio);

        context.scale(pixelRatio, pixelRatio);
      }
    };
    setCanvas();

    let cleanup: (() => void) | undefined;

    if (context) {
      cleanup = animate(context);
    }

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, [canvasWidth, canvasHeight, animate]);

  return canvasRef;
};

export default useCanvas;
