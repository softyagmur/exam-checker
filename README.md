# 🎓📝 Exam Checker

## The answer choices given by the student are compared with the correct answer key to determine whether each choice is correct, incorrect or blank (no answer) and the total number of correct, incorrect and blank answers is calculated.

## Calculations are given both in .txt format and in .json format, example:

**user.txt**
Correct number: 1
Incorrect number: 3
Empty number: 1

Topics that are wrong:
- Trigonometry
- Integral
- Triangle

Empty subjects:
- Derivative



**user.json**
``` json
{
 "true": 1,
 "false": 3,
 "empty": 1,
 "wrong_subject": [
 "Trigonometry",
 "Integral",
 "Triangle"
 ],
 "empty_subject": [
 "Derivative"
 ]
}
```
