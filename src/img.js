/**
 * @desc: 首页截图
 * @author: 陈彤
 * @date: 2017/11/9 15:35
 */

const puppeteer = require('puppeteer');

(async ()=> {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('http://brp.kingdee.com');
  
  await page.setViewport({
    width: 1400,
    height: 900
  });
  
  await page.screenshot({
    path: 'data/img/index.png',
    fullPage: true
  });
  
  // await browser.close();
})();
