function add(numbers) {
  // Step 1: Handle empty input
  if (!numbers) return 0;

  let delimiter = /,|\n/; // Default delimiters: comma and newline

  // Step 2: Handle custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      let customDelimiter = delimiterMatch[1];
      // Escape special characters for the custom delimiter
      customDelimiter = customDelimiter.replace(
        /[-\/\\^$*+?.()|[\]{}]/g,
        "\\$&"
      );
      delimiter = new RegExp(customDelimiter);
      numbers = numbers.slice(numbers.indexOf("\n") + 1); // Remove custom delimiter line
    }
  }
}
module.exports = add;
