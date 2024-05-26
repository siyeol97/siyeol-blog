export const DEFAULT_TEXT_START_X = 50;
export const DEFAULT_TEXT_START_Y = 50;
export const DEFAULT_TEXT_LINE_HEIGHT = 24;
export const DEFAULT_FONT_FAMILY = 'monospace';
export const DEFAULT_FONT_SIZE = 16;
export const DEFAULT_TEXT = `class Developer {
  constructor(name, techStack) {
    this.name = name;
    this.techStack = techStack;
  }

  getGreetings() {
    return 'Hello World!';
  }
}

const front_end_developer = new Developer(
  '이시열', ['JavaScript', 'TypeScript', 'React', 'Next.js']
);

console.log(front_end_developer.getGreetings());`;
