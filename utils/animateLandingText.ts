const animateLandingText = (context: CanvasRenderingContext2D) => {
  const text = `const greeting = 'Hello, world!';\nconsole.log(greeting);`;
  let index = 0;
  let showCursor = true;
  let intervalTime = 30;

  const TEXT_START_X = 50;
  const TEXT_START_Y = 300;
  const TEXT_LINE_HEIGHT = 24;
  const FONT_FAMILY = 'monospace';
  const FONT_SIZE = 16;
  const FONT_COLOR = '#000';

  const renderFrame = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
    context.fillStyle = FONT_COLOR;

    const currentText = text.slice(0, index);
    const lines = currentText.split('\n');
    lines.forEach((line, i) => {
      context.fillText(line, TEXT_START_X, TEXT_START_Y + i * TEXT_LINE_HEIGHT);
    });

    if (index >= text.length) {
      if (showCursor) {
        const currentLine = lines[lines.length - 1];
        const cursorX = TEXT_START_X + context.measureText(currentLine).width;
        const cursorY = TEXT_START_Y + (lines.length - 1) * TEXT_LINE_HEIGHT;
        context.fillRect(cursorX, cursorY - 15, 10, 20);
      }
      showCursor = !showCursor;
      intervalTime = 500;
    } else {
      const currentLine = lines[lines.length - 1];
      const cursorX = TEXT_START_X + context.measureText(currentLine).width;
      const cursorY = TEXT_START_Y + (lines.length - 1) * TEXT_LINE_HEIGHT;
      context.fillRect(cursorX, cursorY - 15, 10, 20);
    }

    if (index <= text.length) {
      index++;
    }

    setTimeout(renderFrame, intervalTime);
  };

  renderFrame();
};

export default animateLandingText;
