/**
 * @desc: index
 * @author: 4pmtong
 * @date: 2017/11/9 16:39
 */

const puppeteer = require('puppeteer');

(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://brp.kingdee.com');
  
  await page.screenshot({ path: 'data/index.png' });
  
  await browser.close();
})();
