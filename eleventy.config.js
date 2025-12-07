import fontAwesomePlugin from "@11ty/font-awesome";

export default async function(eleventyConfig) {

  eleventyConfig.setLayoutResolution(false);

  eleventyConfig.addPassthroughCopy("views/webfonts");

  eleventyConfig.setTemplateFormats("html,njk,gif,png,jpg,webp,css,js,svg");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	eleventyConfig.addPlugin(fontAwesomePlugin, {
    transform: false, // disable the Eleventy transform
    shortcode: "icon",
	})

	return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};

