const fetch = require("node-fetch");

async function getJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
      "User-Agent": "Writing JavaScript action GitHub Skills course.",
    },
  });

  const data = await res.json();
  return data.joke;
}

module.exports = getJoke;
