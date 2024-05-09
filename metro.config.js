const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Añadir alias de carpetas
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    "@components": "./src/components",
    "@hooks": "./src/hooks",
    "@navigation": "./src/navigation",
    "page": "./src/page",
    // Añade más alias según sea necesario
  },
};

module.exports = config;
