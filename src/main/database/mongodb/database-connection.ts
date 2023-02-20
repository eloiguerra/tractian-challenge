/* eslint-disable no-console */
import mongoose from "mongoose";
import { Environment } from "../../config/environment";

export default async () => {
  try {
    const { host, port, user, password } =
      Environment.infrastructure.database.mongodb;

    const connectionString = `mongodb://${user}:${password}@${host}:${port}`;
    console.log(connectionString);

    console.log("Connecting to database...");
    mongoose.set("strictQuery", false);
    await mongoose.connect(connectionString);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};
