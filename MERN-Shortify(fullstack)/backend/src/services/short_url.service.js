import { generateNanoid } from "./helper.js";
import { saveShortUrl } from "../dao/short_url.js";

// This service handles the creation of short URLs, both with and without user association.
export const createShortUrlWithoutUser = async (url) => {
  const shortUrl = generateNanoid(7);
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};

// This service creates a short URL associated with a specific user.
// It generates a unique short URL and saves it along with the original URL and user ID.
export const createShortUrlWithUser = async (url, userId) => {
  const shortUrl = generateNanoid(7);
  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
