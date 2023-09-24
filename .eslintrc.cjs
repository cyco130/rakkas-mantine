require("@rakkasjs/eslint-config/patch");

module.exports = {
  files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
  root: true,
  extends: ["@rakkasjs"],
  parserOptions: { tsconfigRootDir: __dirname },
  settings: {
    "import/resolver": {
      typescript: {
        project: [__dirname + "/tsconfig.json"],
      },
    },
  },
};
