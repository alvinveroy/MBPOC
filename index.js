const chromeLauncher = require("chrome-launcher");
const Chromeless = require("chromeless").Chromeless;
const axios = require("axios");
const path = require("path");

const makeScreenshot = async (chromeless) => {
  const t1 = new Date().getTime();
  const screenshot_folder = path.join(__dirname, "screenshots/" + t1 + ".png");
  return await chromeless
    .goto("https://www.google.com")
    .type("rastaman 2022", 'input[name="q"]') // You may change the value of 'rastaman 2022' to any query to the specific keyword you want. You may specify a keyword that you want to be picked up by google trends.
    .press(13)
    .wait("div#main")
    .screenshot({ filePath: screenshot_folder });
};

const run = async _ => {
  const proxy = await axios
    .get("https://api.getproxylist.com/proxy")
    .then(async (response) => {
      //console.log(response.data);
      const chrome = await chromeLauncher.launch({
        startingUrl: "http://whatismyip.com",
        port: 9222,
        chromeFlags: [
          "--window-size=1200,800",
          "--disable-gpu",
          "--headless", // You can comment this out to monitor the chrome window activity.
          `--proxy-server=${response.data.protocol}://${response.data.ip}:${response.data.port}`, // You can comment this out if you don't want the chrom to run behind proxy.
        ],
      });
      console.log("Chrome debuggable on port: " + chrome.port);
      const chromeless = new Chromeless({
        launchChrome: true,
      });
      const screenshot = await makeScreenshot(chromeless);
      console.log(screenshot);
      await chromeless.end();
    });
};

// you may add iteration here and call it asynchronously so you can run as many headless chrome that your device permits.
run();
