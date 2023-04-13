const Express = require("express");
const http = require("https");

const router = Express.Router();

router.get("/", (request, response) => {
  const options = {
    method: "GET",
    hostname: "jsonplaceholder.typicode.com",
    port: null,
    path: "/users",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      const buff = Buffer.concat(chunks);
      const body = JSON.parse(buff)
      response.render("index", {info: JSON.stringify(body, undefined, 4)})
    });
  });
  req.end();
});

module.exports = router;
