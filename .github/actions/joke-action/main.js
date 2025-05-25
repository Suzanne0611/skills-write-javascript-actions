const getJoke = require("./joke");
const fs = require("fs");
const path = require("path");

async function run() {
  const joke = await getJoke();
  console.log(joke);

  // 正確寫入 GitHub Actions 輸出用的環境檔案
  const githubOutputPath = process.env.GITHUB_OUTPUT;
  fs.appendFileSync(githubOutputPath, `joke-output=${joke}\n`);
}

run();
