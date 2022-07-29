const path = require('path');

const puppeteer = require('puppeteer');

async function helloWorld() {
    console.log('Taking screenshot...');

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(`file:${path.join(__dirname, 'index.html')}`);

    await page.type("input[name=example-date]", "01012035");

    await page.screenshot({ path: 'date_bug.png' });

    await browser.close();

    console.log('All done, please send date_bug.png to Casey!');
}

helloWorld();