import Dotenv from "dotenv";
import "./set-multi-environment";

Dotenv.config();

export interface IEnvironment {
  infrastructure: {
    server: {
      rest: {
        express: {
          port: number;
        };
      };
    };
    database: {
      mongodb: {
        prefix: string;
        host: string;
        user: string;
        password: string;
        database: string;
      };
    };
  };
  secrets: {
    jwt: string;
  };
}

const Environment: IEnvironment = {
  infrastructure: {
    server: {
      rest: {
        express: {
          port: Number(process.env.SERVER_PORT) || 8080,
        },
      },
    },
    database: {
      mongodb: {
        prefix: process.env.DATABASE_PREFIX || "mongodb",
        host: process.env.DATABASE_HOST || "localhost",
        user: process.env.DATABASE_USER || "irineu",
        password: process.env.DATABASE_PASSWORD || "irineu",
        database: process.env.DATABASE_NAME || "tractian",
      },
    },
  },
  secrets: {
    jwt: process.env.JWT,
  },
};

export { Environment };
