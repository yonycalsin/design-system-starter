module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@design-system-starter/eslint-config-base`
  extends: ['@design-system-starter/base'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
