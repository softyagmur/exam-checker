export function checkAnswers(
  userData: string[],
  correctData: string[],
  subjectData: string[]
): string[] {
  return userData.map((item, i) => {
    if (item === "X") return `empty-${subjectData[i]}`;
    return (item === correctData[i] ? "true" : "false") + `-${subjectData[i]}`;
  });
}