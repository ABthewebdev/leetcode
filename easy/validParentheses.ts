// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s: string): boolean {
  const stacks: string[] = [];
  // Looping through each character in the string and testing if the current one is an opening bracket.
  for (let char of s) {
    if (/[\(\[\{]/.test(char)) {
      stacks.push(char);
      // If it is an opening bracket then every step is skipped after and continues to the next iteration.
      continue;
    }
    // If the char is not an opening bracket, then the last pushed char on the stacks array is stored in the top variable and is tested if it matches with the current char.
    const top: string = stacks[stacks.length - 1];
    if (
      (top === "(" && char === ")") ||
      (top === "[" && char === "]") ||
      (top === "{" && char === "}")
    ) {
      // If they do match then top is popped off of the stacks array.
      stacks.pop();
      continue;
    }
    break;
  }
  return stacks.length === 0;
}
