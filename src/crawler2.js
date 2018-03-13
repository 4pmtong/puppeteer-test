/**
 * @desc: crawler2
 * @author: 4pmtong
 * @date: 2017/11/10 9:45
 */

const puppeteer = require('puppeteer');

(async ()=> {
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  
  await page.goto('http://brp.kingdee.com');
  await page.waitFor(2 * 1000);
  
  let aTags =  await page.evaluate(() => {
    const as = [...document.querySelectorAll('.suspended-tech-list > .suspended-tech-item  > .suspended-tech-link')];
    
    return as.map(a => {
      return {
        href: a.href.trim(),
        name: a.text
      };
    });
  });
  
  console.log(aTags);
  
  await page.pdf({ path: 'data/crawler2/首页.pdf' });
  page.close();
  
  for (let i = 0; i < aTags.length; i++) {
    page = await browser.newPage();
    
    let a = aTags[i];
    
    if (a.href !== 'javascript:void(0)') {
      await page.goto(a.href);
      await page.waitFor(2 * 1000);
      
      await page.pdf({path: `./data/crawler2/${a.name}.pdf`});
      page.close();
    }
  }
  
  await browser.close();
})();
