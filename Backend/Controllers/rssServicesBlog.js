// import RSSParser from "rss-parser";

// const parser = new RSSParser({
//   timeout: 120000, // Increase timeout to 120 seconds
// });

// const FeedURL = "https://medium.com/feed/@mukhopadhyaypushan42";

// export const parseBlogs = async () => {
//   const maxRetries = 3; 
//   let attempts = 0;

//   while (attempts < maxRetries) {
//     try {
//       const feed = await parser.parseURL(FeedURL);
//       return feed.items.map((item) => ({
//         id: item.guid,
//         title: item.title,
//         content: item["content:encoded"] || item.content || "",
//         sourceUrl: item.link,
//         headerImage: extractImage(item["content:encoded"] || item.content || ""),
//         publicationDate: new Date(item.isoDate),
//       }));
//     } catch (error) {
//       attempts++;
//       console.error(`Error parsing RSS web feed (attempt ${attempts}):`, error);
//       if (attempts >= maxRetries) { //if the rat-Limiting problem occur when sever show status code 429 which mean its server cant process too many request ata given time
//         if (error.statusCode === 429) {
//           const waitTime = Math.pow(2, attempts) * 1000; 
//           console.log(`Waiting for ${waitTime} ms before retrying...`);
//           await new Promise(resolve => setTimeout(resolve, waitTime)); // this promise hold the process of executing for certain amount of this interval 
//         } else {
//           throw new Error("Could not parse web feed after multiple attempts: " + error.message);
//         }
//       }
//     }
//   }
// };

// const extractImage = (content) => {
//   const regex = /<img[^>]+src="([^">]+)"/; // This regular expression searches for the first img tag occurrence and returns the matched string if found.
//   const match = regex.exec(content);
//   return match ? match[1] : "";
// };

import RSSParser from "rss-parser";

const parser = new RSSParser({
  timeout: 120000, // Increase timeout to 120 seconds
});

const FeedURL = "https://medium.com/feed/@mukhopadhyaypushan42";

export const parseBlogs = async () => {
  const maxRetries = 3;
  let attempts = 0;

  const fetchFeed = async () => {
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
      console.error(`Error parsing RSS web feed (attempt ${attempts}):`, error);
      if (attempts < maxRetries && error.statusCode === 429) {
        const waitTime = Math.pow(2, attempts) * 1000; // Exponential backoff strategy
        console.log(`Waiting for ${waitTime} ms before retrying...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        return fetchFeed(); // Retry fetching the feed
      } else {
        throw new Error("Could not parse web feed after multiple attempts: " + error.message);
      }
    }
  };

  return fetchFeed();
};

const extractImage = (content) => {
  const regex = /<img[^>]+src="([^">]+)"/; // This regular expression searches for the first img tag occurrence and returns the matched string if found.
  const match = regex.exec(content);
  return match ? match[1] : "";
};
