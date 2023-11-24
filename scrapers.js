const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.goto(url);
  await page.waitForNavigation();

  // const [el] = await page.$x('/html/body/div[2]/div/div/div[1]/div/div/div/h1');
  // const txt = await el.getProperty('textContent');
  // const webPage = await txt.jsonValue();

  const [el] = await page.$x('//*[@id="all"]/li[3]/div[2]/div[2]/h4/a');
  const txt = await el.getProperty('textContent');
  const eventTitle = await txt.jsonValue();

  // const [el1] = await page.$x('//*[@id="event_description"]');
  // const txt1 = await el1.getProperty('textContent');
  // const eventDescription = await txt1.jsonValue();

  const [el2] = await page.$x('/html/body/section[1]/div/div[1]/div[2]/div/figure/img');
  const src = await el2.getProperty('src');
  const imageURL = await src.jsonValue();

  console.log({eventTitle, imageURL});

  browser.close();

};

scrapeProduct('http://www.go-montreal.com/attraction_events_nov.htm');
