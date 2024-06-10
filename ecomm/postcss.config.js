

// postconfig.config.js
module.exports = {
  plugins: [
    'postcss-nested',
    'tailwindcss',
    'autoprefixer',
  ],
}

module.exports = {
  plugins: {
    'postcss-nesting': {}, // Add this line to enable nesting
    tailwindcss: {},
    autoprefixer: {},
  },
};