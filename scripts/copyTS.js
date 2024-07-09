const fse = require('fs-extra');
const glob = require('glob');
const path = require('path');

const srcDir = path.join('./src');
const distDir = path.join('./dist/js');

const files = glob.sync('**/*.d.ts', {
  cwd: srcDir,
});
files.forEach((file) => {
  const from = path.join(srcDir, file);
  const to = path.join(distDir, file);
  fse.copySync(from, to);
});
