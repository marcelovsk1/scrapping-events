const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.goto(url);
  await page.waitForNavigation();

  // const [el] = await page.$x('/html/body/div[2]/div/div/div[1]/div/div/div/h1');
  // const txt = await el.getProperty('textContent');
  // const webPage = await txt.jsonValue();

  const [el] = await page.$x('//*[@id="event_list"]/div[2]/ul/div[1]/li[9]/div[4]/div/div[2]/div/div/a/h3');
  const txt = await el.getProperty('textContent');
  const eventTitle = await txt.jsonValue();

  // const [el1] = await page.$x('//*[@id="event_description"]');
  // const txt1 = await el1.getProperty('textContent');
  // const eventDescription = await txt1.jsonValue();

  const [el2] = await page.$x('//*[@id="event_list"]/div[2]/ul/div[1]/li[9]/div[3]/img');
  const src = await el2.getProperty('src');
  const imageURL = await src.jsonValue();

  console.log({eventTitle, imageURL});

  browser.close();

};

scrapeProduct('https://allevents.in/montreal/sports?ref=cityhome-category-box-new');
