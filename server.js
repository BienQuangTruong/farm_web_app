require("dotenv").config();
var express = require("express");
// var path = require('path')
const {
  DEFAULT_ENVIROMENT,
  DEFAULT_CONFIG,
} = require("./src/common/constants.ts");
const fs = require("fs");
const next = require("next");
const { parse } = require("url");

const cookieParser = require("cookie-parser");
const port =
  parseInt(process.env.NEXT_PUBLIC_APP_PORT, 10) || DEFAULT_CONFIG.port;
const dev = process.env.NEXT_PUBLIC_NODE_ENV !== DEFAULT_ENVIROMENT;
const app = next({ dev });
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(cookieParser());

  server.get("/admin", async (req, res) => {
    const file = await readFileAsync("public/admin/index.html");
    res.end(file);
  });

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    return handle(req, res, parsedUrl);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
