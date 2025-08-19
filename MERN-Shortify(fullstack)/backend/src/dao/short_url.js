import UrlSchema from "../models/short_url.model.js";
import { NotFoundError } from "../services/ApiError.js";

// It is a design pattern used to separate the low-level data access logic
// saveShort URl file contains the functions that interact with the database
export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    const newUrl = new UrlSchema({
      full_url: longUrl,
      short_url: shortUrl,
    });

    if (userId) {
      newUrl.user_id = userId;
    }
    newUrl.save();
  } catch (error) {
    throw new Error(error);
  }
};

// This function retrieves a URL from the database based on its short URL
// It is used to redirect the user to the full URL when they access the short URL
// It is a design pattern used to separate the low-level data access logic
export const getShortUrl = async (shortUrl) => {
  try {
    const url = await UrlSchema.findOneAndUpdate(
      { short_url: shortUrl },
      { $inc: { clicks: 1 } }
    );
    if (!url) {
      throw new NotFoundError();
    }
    return url;
  } catch (error) {
    throw new ConflictError();
  }
};
