process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (data.toString().trim() === "pwd" || data.toString().trim() === "abc") {
    process.stdout.write(process.cwd());
  } else {
    process.stdout.write("You typed: " + cmd);
  }

  process.stdout.write("\nprompt > ");
});
