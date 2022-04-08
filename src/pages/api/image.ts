import chrome from "chrome-aws-lambda";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { SPOTIFY_IMAGE_HEIGHT, SPOTIFY_IMAGE_WIDTH } from "../../consts";

const shot = async (embedUrl: string) => {
  const browser = await chrome.puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: true,
    defaultViewport: {
      deviceScaleFactor: 2,
      width: SPOTIFY_IMAGE_WIDTH,
      height: SPOTIFY_IMAGE_HEIGHT,
    },
  });
  const page = await browser.newPage();
  try {
    await page.goto(embedUrl);
    return await page.screenshot({ type: "png" });
  } finally {
    await browser.close();
  }
};

const image = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("X-Robots-Tag", "noindex");
  const type = req.query["type"];
  const id = req.query["id"];

  if (typeof type !== "string") return res.status(400).write("invalid type");
  if (typeof id !== "string") return res.status(400).write("invalid id");

  const embedUrl = `https://open.spotify.com/embed/${type}/${id}`;

  res.setHeader("Link", `<${embedUrl}>; rel="canonical"`);
  const img = await shot(embedUrl);
  res.setHeader("Content-Type", "image/png");
  res.setHeader("Cache-Control", "max-age=86400, public, stale-while-revalidate");
  res.setHeader("Content-DPR", "2.0");
  res.send(img);
};

export default image;
