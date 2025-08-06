//bluid-in-module

// Import the chalk module
import chalk from "chalk";

console.log(chalk.bold.underline.blue("Bold, underlined, and blue"));

function chalkPrintMethod(type, message) {
  if (type === "success") {
    console.log(chalk.green(message));
  } else if (type === "warn") {
    console.log(chalk.yellow(message));
  } else if (type === "error") {
    console.log(chalk.red(message));
  }
}

chalkPrintMethod("success", "Server started on port 3000");
chalkPrintMethod("warn", "Database connection slow");
chalkPrintMethod("error", "Failed to load config");
