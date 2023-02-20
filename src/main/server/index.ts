import makeApp from "@main/config/app";
import { Environment } from "@main/config/environment";

const makeServer = async () => {
  const app = await makeApp();

  console.log(Environment.infrastructure.server.rest.express.port);
  app.listen(
    Environment.infrastructure.server.rest.express.port || 5000,
    "0.0.0.0",
    () => {
      // eslint-disable-next-line no-console
      console.log(
        `Server running on port ${
          Environment.infrastructure.server.rest.express.port || 5000
        }!`,
      );
    },
  );
};

makeServer();
