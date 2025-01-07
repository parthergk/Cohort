const fs = require('fs');
const { Command } = require("commander");
const program = new Command();

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

program
  .command("add")
  .description("Add a new task")
  .argument("<string>", "Task to add")
  .action((task) => {
    const filePath = 'todos.json';

    // Read existing tasks
    fs.readFile(filePath, 'utf8', (err, data) => {
      let tasks = [];
      if (!err) {
        try {
          tasks = JSON.parse(data); // Parse existing tasks
        } catch (e) {
          console.error("Error parsing JSON, initializing with an empty list.");
        }
      }

      // Add new task to the list
      tasks.push(task);

      // Write updated tasks to file
      fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log('Task added successfully!');
        }
      });
    });
  });

program.parse();
