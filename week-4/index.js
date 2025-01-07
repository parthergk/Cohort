const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count")
  .action((file)=>{
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log("Error", err);
        } else {
          const count = data.split("\n").length;
          console.log(`File have ${count} lines`);
        }
      });
  })

  program.parse();


