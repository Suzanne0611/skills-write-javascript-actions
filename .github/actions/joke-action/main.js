const getJoke = require("./joke");

async function run() {
  const joke = await getJoke();
  console.log(`::set-output name=joke-output::${joke}`);
}

run();
