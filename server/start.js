// External libraries(local included)
import { connectToDB } from "./services/mongodb/database.js";
import server from "./app.js";
import config from "config";
import next from "next";

// Init Config
const port = config.get("serverConfig.port");
const hostname = config.get("serverConfig.host");
const ENV = config.util.getEnv("NODE_ENV");

// NextJS Config
const dev = ENV !== "production";
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

connectToDB();

server.set("port", port);

app
  .prepare()
  .then(() => {
    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      ENV !== "production" &&
        console.log(`> Server ready on http://${hostname}/${port}`);
    });
  })
  .catch((ex) => {
    console.error(`Server connection error:
    ${ex.stack}`);
    process.exit(1);
  });
