const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', {waitUntil: 'load'});
    await page.pdf({path: '宋甫简历react-puppeteer.pdf', format: 'A4', printBackground:true});

    await browser.close();
})();