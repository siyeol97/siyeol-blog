export const TEXT_START_X = 50;
export const TEXT_START_Y = 50;
export const TEXT_LINE_HEIGHT = 24;
export const FONT_FAMILY = 'monospace';
export const FONT_SIZE = 16;
export const FONT_COLOR = '#000';
export const TEXT = `class Developer {
  constructor(name, techStack) {
      this.name = name;
      this.techStack = techStack;
  }

  getGreetings() {
      return '안녕하세요. 개인블로그에 오신 것을 환영합니다!';
  }
}

const FE_Developer = new Developer('이시열', ['JavaScript', 'TypeScript', 'React', 'Next.js']);
console.log(FE_Developer.getGreetings());`;
