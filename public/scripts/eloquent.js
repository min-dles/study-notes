// this file is reserved for notes and practice exercises from Eloquent JavaScript
$(function() {
  console.log('READY');
  escapingChar();
})


// Ch. 1 Values, Types, and Operators
// Re: (\) found inside a string (quoted text) indicates that a char after has special meaning. This technique is called escaping the character.
  // (\n) is a newline. (\t) is a tab char. 
  // template literals are backtick-quoted strings and can span lines, and embed other values. ${} inside a template literal will evaluate or compute the values inside the curly brackets.
  // EX: check console!
function escapingChar() {
  console.log("\tThis is the first line\nAnd this is the second");
  console.log(`Template literal practice with: 5 divided by 2 equals ${5/2}`);
}

// Ch.2 Program Structure
