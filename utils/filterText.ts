const filterText = (text: string) => {
  const filteredText = text
    .replace(/\([^)]*\)/gm, '')
    .replace(/\[(.*?)\]/g, '$1')
    .replace(/`/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/#/g, '')
    .trim();
  return filteredText;
};

export default filterText;
