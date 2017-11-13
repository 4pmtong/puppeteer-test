/**
 * @desc: 技术文档页爬虫
 * @author: 陈彤
 * @date: 2017/11/9 17:09
 */

const puppeteer = require('puppeteer');

(async ()=> {
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  
  await page.goto('http://brp.kingdee.com/doc/guide');
  await page.waitFor(2 * 1000);
  
  let aTags =  await page.evaluate(() => {
    const as = [...document.querySelectorAll('.doc-nav > ul > li > ul > li > a')];
    
    return as.map(a => {
      return {
        href: a.href.trim(),
        name: a.text
      };
    });
  });
  
  console.log(aTags);
  
  const guideName = await page.$eval('.doc-nav > ul > li.no-top > a', el => el.text);
  await page.pdf({ path: `data/crawler/${guideName}.pdf` });
  page.close();
  
  for (let i = 0; i < aTags.length; i++) {
    page = await browser.newPage();
  
    let a = aTags[i];
    
    if (a.href !== 'javascript:void(0)') {
      await page.goto(a.href);
      await page.waitFor(2 * 1000);
  
      await page.pdf({path: `./data/crawler/${a.name}.pdf`});
  
      page.close();
    }
  }
  
  await browser.close();
})();
