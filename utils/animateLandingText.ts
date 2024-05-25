import {
  FONT_COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  TEXT_LINE_HEIGHT,
  TEXT_START_X,
  TEXT_START_Y,
} from '@/constants/landingText';

const animateLandingText = (context: CanvasRenderingContext2D) => {
  const text = `const greeting = 'Hello, world!';\nconsole.log(greeting);`;
  let index = 0;
  let showCursor = true;
  let lastTime = 0;
  const cursorBlinkInterval = 500;

  const renderFrame = (timestamp: number) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
    context.fillStyle = FONT_COLOR;

    const currentText = text.slice(0, index);
    const lines = currentText.split('\n');
    lines.forEach((line, i) => {
      context.fillText(line, TEXT_START_X, TEXT_START_Y + i * TEXT_LINE_HEIGHT);
    });

    const currentLine = lines[lines.length - 1];
    const cursorX = TEXT_START_X + context.measureText(currentLine).width;
    const cursorY = TEXT_START_Y + (lines.length - 1) * TEXT_LINE_HEIGHT;

    if (showCursor) {
      context.fillRect(cursorX, cursorY - 15, 10, 20);
    }

    if (index >= text.length) {
      if (timestamp - lastTime > cursorBlinkInterval) {
        showCursor = !showCursor;
        lastTime = timestamp;
      }
    } else {
      index++;
    }

    requestAnimationFrame(renderFrame);
  };

  renderFrame(0);
};

export default animateLandingText;
