/**
 * @desc: trace
 * @author: 4pmtong
 * @date: 2017/11/10 10:30
 */

const puppeteer = require('puppeteer');

(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.tracing.start({ path: 'data/traceIndex.json' });
  await page.goto('http://brp.kingdee.com');
  
  await page.tracing.stop();
  
  await browser.close();
})();
