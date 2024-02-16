import { readdirSync } from "fs";
import path from "path";
import url from "url";

const projects = readdirSync("public/images", {
  withFileTypes: true,
  recursive: true,
})
  .filter((dirent) => dirent.isFile())
  .map((dirent) => {
    const fullPath = url.parse(path.join(dirent.path, dirent.name), true);
    return {
      path: fullPath.pathname?.replace(/^public\//, "/"),
      name: dirent.name.replace(/\.(png|jpg|jpeg|gif|svg)$/, ""),
    };
  });

const projectPaths = `[${projects
  .map((project) => `"${project.path}"`)
  .join(",")}]`;

console.log(projects);

export { projects, projectPaths };
