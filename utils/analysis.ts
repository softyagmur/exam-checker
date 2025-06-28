export function analyzeResults(results: string[]) {
  let correctCount = 0;
  let wrongCount = 0;
  let emptyCount = 0;

  const wrongSubjects: string[] = [];
  const emptySubjects: string[] = [];

  for (const res of results) {
    const [status, subject] = res.split("-");
    if (status === "true") {
      correctCount++;
    } else if (status === "false") {
      wrongCount++;
      wrongSubjects.push(subject);
    } else if (status === "empty") {
      emptyCount++;
      emptySubjects.push(subject);
    }
  }

  return {
    correctCount,
    wrongCount,
    emptyCount,
    wrongSubjects,
    emptySubjects,
  };
}
