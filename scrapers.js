const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.goto(url);
  await page.waitForNavigation();

  const [el] = await page.$x('/html/body/div[2]/div/div/div[1]/div/div/div/h1');
  const txt = await el.getProperty('textContent');
  const webPage = await txt.jsonValue();

  const [el1] = await page.$x('//*[@id="all"]/li[8]/div[2]/div[2]/h4/a');
  const txt1 = await el1.getProperty('textContent');
  const eventTitle = await txt1.jsonValue();

  const [el2] = await page.$x('//*[@id="all"]/li[7]/div[2]/div[1]/div/div');
  const txt2 = await el2.getProperty('textContent');
  const eventDate = await txt2.jsonValue();

  const [el3] = await page.$x('//*[@id="all"]/li[8]/div[2]/div[2]/p/text()');
  const txt3 = await el3.getProperty('textContent');
  const eventDescription = await txt3.jsonValue();

  const [el4] = await page.$x('//*[@id="all"]/li[8]/div[1]/a/img');
  const src = await el4.getProperty('src');
  const imageURL = await src.jsonValue();

  console.log({webPage, eventTitle, eventDate, eventDescription, imageURL});

  browser.close();

};

scrapeProduct('http://www.go-montreal.com/attraction_events_nov.htm');
