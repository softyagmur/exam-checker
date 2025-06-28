import { analyzeResults } from "./utils/analysis";
import { writeFileSync } from "fs";
import { checkAnswers } from "./utils/exam";
import config from "./config.json";

const results = checkAnswers(
  config?.userData,
  config?.correctData,
  config?.subjectData
);
const analysis = analyzeResults(results);

let output = "";
output += `True number: ${analysis.correctCount}\n`;
output += `False number: ${analysis.wrongCount}\n`;
output += `Empty number: ${analysis.emptyCount}\n\n`;

if (analysis.wrongSubjects.length > 0) {
  output += "Issues that are wrong:\n";
  analysis.wrongSubjects.forEach((s) => (output += `- ${s}\n`));
  output += "\n";
}

if (analysis.emptySubjects.length > 0) {
  output += "Topics that are empty:\n";
  analysis.emptySubjects.forEach((s) => (output += `- ${s}\n`));
  output += "\n";
}

try {
  writeFileSync(`${config?.studentName}.txt`, output, { encoding: "utf-8" });
  console.log(`Analysis saved to ${config?.studentName}.txt`);
} catch (err) {
  console.error("Error writing TXT file:", err);
}

const jsonOutput = {
  true: analysis.correctCount,
  false: analysis.wrongCount,
  empty: analysis.emptyCount,
  wrong_subject: analysis.wrongSubjects,
  empty_subject: analysis.emptySubjects,
};

try {
  writeFileSync(
    `${config?.studentName}.json`,
    JSON.stringify(jsonOutput, null, 2),
    {
      encoding: "utf-8",
    }
  );
  console.log(`Analysis saved to ${config?.studentName}.json`);
} catch (err) {
  console.error("Error writing JSON file:", err);
}
