const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://developers.google.com/apps-script/';

  await page.goto(url);

  const scrapingData = await page.evaluate(() => {
    const result = {};
    const titleValues = [];
    const contentValues = [];
    const titleList = document.querySelectorAll('h3');

    titleList.forEach(_node => {
      titleValues.push(_node.innerText);
    })

    const contentList = document.querySelectorAll('ul');

    contentList.forEach(_node => {
      contentValues.push(_node.innerText);
    })

    result.title = titleValues[2];
    result.content = contentValues[3].match(/^.+\n/)[0].replace(/\n/, '');

    return result;
  });

  console.log(scrapingData);

  await browser.close();
})();
