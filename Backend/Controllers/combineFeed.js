import RSSParser from "rss-parser";

const parser = new RSSParser({
  timeout: 120000, // Increase timeout to 120 seconds
});

const FeedURLs = [
  "https://medium.com/feed/@mukhopadhyaypushan42",
  "https://medium.com/feed/chainstack"
];

export const CombineBlog = async () => {
  const maxRetries = 3;
  let allItems = [];

  const fetchFeed = async (FeedURL, attempts = 0) => {
    try {
      const feed = await parser.parseURL(FeedURL);
      return feed.items.map((item) => ({
        id: item.guid,
        title: item.title,
        content: item["content:encoded"] || item.content || "",
        sourceUrl: item.link,
        headerImage: extractImage(item["content:encoded"] || item.content || ""),
        publicationDate: new Date(item.isoDate),
      }));
    } catch (error) {
      attempts++;
      console.error(`Error parsing RSS web feed from ${FeedURL} (attempt ${attempts}):`, error);
      if (attempts < maxRetries && error.statusCode === 429) {
        const waitTime = Math.pow(2, attempts) * 1000; // Exponential backoff strategy
        console.log(`Waiting for ${waitTime} ms before retrying...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        return fetchFeed();
      } else {
        throw new Error(`Could not parse web feed after multiple attempts: ${error.message}`);
      }
    }
  };

  try {
    const feedPromises = FeedURLs.map((url) => fetchFeed(url));
    const feedResults = await Promise.all(feedPromises);
    allItems = feedResults.flat();
  } catch (error) {
    console.error("Failed to fetch all feeds:", error);
  }

  return allItems;
};

const extractImage = (content) => {
  const regex = /<img[^>]+src="([^">]+)"/;
  const match = regex.exec(content);
  return match ? match[1] : "";
};
