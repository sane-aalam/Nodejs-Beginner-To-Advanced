import { createShortUrlWithoutUser } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import { asyncWrapper } from "../services/AsyncWrapper.js";

// flow-code: controller > router > app
// asyncWrapper
export const createShortUrl = asyncWrapper(async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlWithoutUser(url);
  res.status(200).json({
    link: process.env.APP_URL + shortUrl,
    msg: "Short URL created successfully.",
  });
});

export const redirectShortUrlToFullUrl = asyncWrapper(async (req, res) => {
  const { shortUrl } = req.params;
  const url = await getShortUrl(shortUrl);
  // console.log("url", url);
  console.log("full_url", url.full_url);
  console.log("clicks", url.clicks);
  res.redirect(url.full_url);
});
