import {
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_TEXT,
  DEFAULT_TEXT_LINE_HEIGHT,
  DEFAULT_TEXT_START_X,
  DEFAULT_TEXT_START_Y,
  SMALL_FONT_SIZE,
  SMALL_TEXT,
  SMALL_TEXT_LINE_HEIGHT,
  SMALL_TEXT_START_X,
  SMALL_TEXT_START_Y,
} from '@/constants/landingText';

const SYNTAX_COLORS: { [key: string]: string } = {
  keyword: '#BB7CD7',
  string: '#9FC080',
  number: '#005cc5',
  object: '#DEC083',
  function: '#6B9DD2',
  default: '#ACB2BE',
};

interface Token {
  type: string;
  value: string;
}

const tokenize = (code: string): Token[] => {
  const regex =
    /\b(class|constructor|return|const|new|this)\b|('[^']*'|"[^"]*")|(\d+)|\b(Developer|FE_Developer|console)\b|\b(getGreetings|log)\b/g;
  let match: RegExpExecArray | null;
  const tokens: Token[] = [];
  let lastIndex = 0;

  while ((match = regex.exec(code)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({
        type: 'default',
        value: code.slice(lastIndex, match.index),
      });
    }
    if (match[1]) {
      tokens.push({ type: 'keyword', value: match[1] });
    } else if (match[2]) {
      tokens.push({ type: 'string', value: match[2] });
    } else if (match[3]) {
      tokens.push({ type: 'number', value: match[3] });
    } else if (match[4]) {
      tokens.push({ type: 'object', value: match[4] });
    } else if (match[5]) {
      tokens.push({ type: 'function', value: match[5] });
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < code.length) {
    tokens.push({ type: 'default', value: code.slice(lastIndex) });
  }

  return tokens;
};

const animateLandingText = (
  context: CanvasRenderingContext2D,
  isSmallScreen: boolean,
  handleAnimationFlag: (flag: boolean) => void
): (() => void) => {
  const TEXT_START_X = isSmallScreen
    ? SMALL_TEXT_START_X
    : DEFAULT_TEXT_START_X;
  const TEXT_START_Y = isSmallScreen
    ? SMALL_TEXT_START_Y
    : DEFAULT_TEXT_START_Y;
  const TEXT_LINE_HEIGHT = isSmallScreen
    ? SMALL_TEXT_LINE_HEIGHT
    : DEFAULT_TEXT_LINE_HEIGHT;
  const FONT_SIZE = isSmallScreen ? SMALL_FONT_SIZE : DEFAULT_FONT_SIZE;
  const TEXT = isSmallScreen ? SMALL_TEXT : DEFAULT_TEXT;
  let index = 0;
  let animationFrameId: number;

  handleAnimationFlag(false);
  const renderFrame = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.font = `${FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`;
    context.fillStyle = '#000';

    const currentText = TEXT.slice(0, index);
    const lines = currentText.split('\n');

    lines.forEach((line, i) => {
      const tokens = tokenize(line);
      let x = TEXT_START_X;

      tokens.forEach((token) => {
        context.fillStyle = SYNTAX_COLORS[token.type] || SYNTAX_COLORS.default;
        context.fillText(token.value, x, TEXT_START_Y + i * TEXT_LINE_HEIGHT);
        x += context.measureText(token.value).width;
      });
    });

    const currentLine = lines[lines.length - 1];
    const cursorX = TEXT_START_X + context.measureText(currentLine).width;
    const cursorY = TEXT_START_Y + (lines.length - 1) * TEXT_LINE_HEIGHT;
    context.fillRect(cursorX, cursorY - 15, 10, 20);
    if (index < TEXT.length) {
      index++;
      animationFrameId = requestAnimationFrame(renderFrame);
    } else {
      handleAnimationFlag(true);
    }
  };

  renderFrame();

  return () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };
};

export default animateLandingText;
