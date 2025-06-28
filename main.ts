import { checkAnswers } from "./utils/exam";

const userData = ["A", "B", "X", "D", "E"];
const correctData = ["B", "A", "D", "C", "E"];
const subjectData = [
  "Trigonometry",
  "Integral",
  "Derivative",
  "Triangle",
  "Geometric",
];

const result = checkAnswers(userData, correctData, subjectData);
console.log(result);