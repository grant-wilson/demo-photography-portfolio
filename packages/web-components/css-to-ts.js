/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as fs from "fs";

// Find all *.css files in the src directory
const files = fs
  .readdirSync("src")
  .filter((file) => file.endsWith(".css"))
  .map((file) => `src/${file}`);

for (let filePath of files) {
  try {
    const content = fs.readFileSync(filePath);
    fs.writeFileSync(
      `${filePath}.ts`,
      `/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
 import {css} from 'lit';
 export const styles = css\`${content.toString("utf8")}\`;
 `
    );
  } catch (error) {
    console.error(error);
  }
}
