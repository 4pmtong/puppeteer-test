/**
 * @desc: 首页截图
 * @author: 4pmtong
 * @date: 2017/11/9 15:35
 */

const puppeteer = require('puppeteer');

(async ()=> {
  // 创建浏览器
  const browser = await puppeteer.launch({ headless: false });
  // 新建一个空白网页
  const page = await browser.newPage();
  
  // 跳转到指定网页
  await page.goto('http://brp.kingdee.com');
  
  // 设置窗口大小
  await page.setViewport({
    width: 1400,
    height: 900
  });
  
  // 截图
  await page.screenshot({
    path: 'data/img/index.png',
    fullPage: true
  });
  
  await browser.close();
})();
