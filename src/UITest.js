/**
 * @desc: UITest
 * @author: 陈彤
 * @date: 2017/11/10 10:41
 */

const puppeteer = require('puppeteer');

(async ()=> {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.setViewport({width: 1400, height: 1000});
  
  await page.goto('http://brp.kingdee.com/tech/bdi/bore');
  
  const input = '.req-box .input-item';
  const searchBtn = '.req-box .search';
  const changeBtn = '.change-box .change';
  const resText = '.response-box .text-res';
  const resJson = '.response-box .responjson';
  
  const UITest = async i => {
  
    if (i === 0) {
      await page.$eval(input, el => { el.value = ''; });
      await page.focus(input);
      await page.type(input, '金蝶');
      await page.click(searchBtn);
    } else {
      await page.click(changeBtn);
    }
  
    await page.waitForSelector(resText + ' p');
    
    await page.screenshot({ path: `data/UITest/${i + 1}.png` });
    
    await page.$eval(resJson, el => {
      console.log(el.innerHTML);
    })
  };
  
  for (let i = 0; i < 10; i++) {
    await UITest(i);
  }
  
  // await browser.close();
})();