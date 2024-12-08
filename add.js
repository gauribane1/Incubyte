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
  // Step 3: Split numbers using the delimiter
  const numArray = numbers.split(delimiter).map(Number);
  // Step 4: Check for negative numbers
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
}
module.exports = add;
