// Eleventy Config

module.exports = eleventyConfig => {
  // Include our static assets
  eleventyConfig.addPassthroughCopy({
    'web/_assets': 'assets'
  })

  // Change the structure to make it easier to follow
  return {
    dir: {
      input: 'web',
      output: 'dist',
      includes: 'includes',
      data: 'globals'
    }
  }
}
