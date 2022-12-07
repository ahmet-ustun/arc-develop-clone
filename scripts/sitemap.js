const fs = require("fs-extra");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");

const robotsTxt = `User-agent: *
Sitemap: https://arc-development-clone.vercel.app/sitemap_local.xml
Disallow:
`;

fs.writeFileSync("public/robots.txt", robotsTxt);
console.log("robots.txt saved 🎉");

const pathsObject = getPathsObject();
const todayDate = formatDate(new Date());

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pathsObject)
    .filter((path) => path !== "/_document" && path !== "/_app")
    .map(
      (path) => `
  <url>
    ${
      path === "/index"
        ? `<loc>https://arc-development-clone.vercel.app</loc>`
        : `<loc>https://arc-development-clone.vercel.app${path}</loc>`
    }
    <lastmod>${
      pathsObject[path].lastModified
        ? formatDate(new Date(pathsObject[path].lastModified))
        : todayDate
    }</lastmod>
  </url>
  `
    )}
</urlset>
`;

fs.writeFileSync("public/sitemap_local.xml", sitemapXml);
console.log("sitemap_local.xml saved 🎉");
