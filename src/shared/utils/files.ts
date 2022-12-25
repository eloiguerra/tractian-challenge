import fs from "fs";
import path from "path";

export function mapProjectFiles(directory: string) {
  const routes = [];

  fs.readdirSync(directory).forEach(file => {
    const absolute = path.join(directory, file);

    if (fs.statSync(absolute).isDirectory()) {
      routes.push(...mapProjectFiles(absolute));
    } else {
      routes.push(absolute);
    }
  });

  return routes;
}
