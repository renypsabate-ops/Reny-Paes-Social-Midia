module.exports = function(eleventyConfig) {
  // Copia arquivos estáticos
  eleventyConfig.addPassthroughCopy("imagens");
  eleventyConfig.addPassthroughCopy("reny-foto.jpeg");
  eleventyConfig.addPassthroughCopy("admin");

  // Filtro de data em português
  eleventyConfig.addFilter("dataFormatada", function(dateObj) {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  });

  // Filtro de trecho
  eleventyConfig.addFilter("trecho", function(text, length = 160) {
    if (!text) return "";
    return text.length > length ? text.substring(0, length) + "..." : text;
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
