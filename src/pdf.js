/**
 * @desc: 首页打印成pdf
 * @author: 陈彤
 * @date: 2017/11/9 17:04
 */

const puppeteer = require('puppeteer');

(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://brp.kingdee.com');
  
  await page.pdf({ path: 'data/index.pdf' });
  await browser.close();
})();
