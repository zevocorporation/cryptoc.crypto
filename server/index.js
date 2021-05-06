import express from "express";
import cors from "cors";
import Parser from "rss-parser";
import fs from "fs";
const app = express();

app.use(cors());

app.get("/medium", async (req, res) => {
  const parser = new Parser();

  const feed = await parser.parseURL("https://medium.com/feed/@meroscrypto");

  let items = [];

  // Clean up the string and replace reserved characters
  const fileName = `${feed.title
    .replace(/\s+/g, "-")
    .replace(/[/\\?%*:|"<>]/g, "")
    .toLowerCase()}.json`;

  if (fs.existsSync(fileName)) {
    items = require(`./${fileName}`);
  }

  // Add the items to the items array
  await Promise.all(
    feed.items.map(async (currentItem) => {
      // Add a new item if it doesn't already exist
      if (items.filter((item) => isEquivalent(item, currentItem)).length <= 0) {
        items.push(currentItem);
      }
    })
  );

  res.json(items);
});

app.get("/youtube", async (req, res) => {
  const parser = new Parser();

  const feed = await parser.parseURL(
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCcOzf3f6ZWVlIu-6qQpjudA"
  );

  let items = [];

  // Clean up the string and replace reserved characters
  const fileName = `${feed.title
    .replace(/\s+/g, "-")
    .replace(/[/\\?%*:|"<>]/g, "")
    .toLowerCase()}.json`;

  if (fs.existsSync(fileName)) {
    items = require(`./${fileName}`);
  }

  // Add the items to the items array
  await Promise.all(
    feed.items.map(async (currentItem) => {
      // Add a new item if it doesn't already exist
      if (items.filter((item) => isEquivalent(item, currentItem)).length <= 0) {
        items.push(currentItem);
      }
    })
  );

  res.json(items);
});

app.listen(5000, () => {
  console.log("running");
});

// (async function main() {
//   // Make a new RSS Parser
//   const parser = new Parser();

//   // Get all the items in the RSS feed
//   const feed = await parser.parseURL(
//     "https://www.youtube.com/feeds/videos.xml?channel_id=UCTNtRdBAiZtHP9w7JinzfUg"
//   ); // https://www.reddit.com/.rss

//   let items = [];

//   // Clean up the string and replace reserved characters
//   const fileName = `${feed.title
//     .replace(/\s+/g, "-")
//     .replace(/[/\\?%*:|"<>]/g, "")
//     .toLowerCase()}.json`;

//   if (fs.existsSync(fileName)) {
//     items = require(`./${fileName}`);
//   }

//   // Add the items to the items array
//   await Promise.all(
//     feed.items.map(async (currentItem) => {
//       // Add a new item if it doesn't already exist
//       if (items.filter((item) => isEquivalent(item, currentItem)).length <= 0) {
//         items.push(currentItem);
//       }
//     })
//   );

//   // Save the file
//   fs.writeFileSync(fileName, JSON.stringify(items));
// });

function isEquivalent(a, b) {
  // Create arrays of property names
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);

  // if number of properties is different, objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];

    // if values of same property are not equal, objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // if we made it this far, objects are considered equivalent
  return true;
}