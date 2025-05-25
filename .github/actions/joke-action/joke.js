const https = require("https");

async function getJoke() {
  const options = {
    hostname: "icanhazdadjoke.com",
    path: "/",
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": "Writing JavaScript action GitHub Skills course.",
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed.joke);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.end();
  });
}

module.exports = getJoke;
