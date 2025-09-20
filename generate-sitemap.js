import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const hostname = "https://timelesscleaning.co.uk//";

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
sitemap.write({ url: "/about", changefreq: "weekly", priority: 0.8 });
sitemap.write({ url: "/services", changefreq: "weekly", priority: 0.8 });
sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.5 });
sitemap.write({
  url: "/terms-and-conditions",
  changefreq: "yearly",
  priority: 0.3,
});
sitemap.write({ url: "/privacy-policy", changefreq: "yearly", priority: 0.3 });
sitemap.write({ url: "/faqs", changefreq: "monthly", priority: 0.6 });

sitemap.end();

streamToPromise(writeStream).then(() => console.log("Sitemap created!"));
