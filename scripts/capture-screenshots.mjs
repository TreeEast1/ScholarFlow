import { chromium } from "playwright";

const pages = [
  { url: "http://localhost:3000/", path: "docs/screenshots/home.png" },
  { url: "http://localhost:3000/explore", path: "docs/screenshots/explore.png" },
  {
    url: "http://localhost:3000/topic/graphrag",
    path: "docs/screenshots/topic-graphrag.png",
  },
  { url: "http://localhost:3000/trends", path: "docs/screenshots/trends.png" },
  {
    url: "http://localhost:3000/workspace",
    path: "docs/screenshots/workspace.png",
  },
  {
    url: "http://localhost:3000/report-builder",
    path: "docs/screenshots/report-builder.png",
  },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1512, height: 982 },
  deviceScaleFactor: 2,
});

for (const item of pages) {
  await page.goto(item.url, { waitUntil: "networkidle" });
  await page.screenshot({ path: item.path, fullPage: true });
}

await browser.close();
