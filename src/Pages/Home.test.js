
const assert = require('assert')
const puppeteer = require('puppeteer');

let browser , page;

// beforeEach (async()=>{
//      browser = await puppeteer.launch({
//           headless:false
//      });
//   page = await browser.newPage();
//   await page.goto('http://localhost:3000/')
//   const url = await page.url();
//   assert(url==='http://localhost:3000/')
// })
// afterEach(async()=>{
//      await browser.close();
// })

test('testing home test 1',async()=>{
  browser = await puppeteer.launch({
              headless:false
         });
      page = await browser.newPage();
      await page.goto('http://localhost:3000/')
      // const url = await page.url();
      // assert(url==='http://localhost:3000/')
const message = await page.evaluate(async () => {
  const scriptContext = window.scriptContext
  console.log("rnp playback")
  if (scriptContext) {
    const Rnp = scriptContext.getRecordnPlayManager()
    if (Rnp) {
      let lis0 = await Rnp.getComponentById("/signin")
                    lis0.onSetUsername("1")
                    let lis1 = await Rnp.getComponentById("/signin")
                    lis1.onSetPassword("1")
                    let lis2 = await Rnp.getComponentById("/signin")
                    lis2.onSubmit()
      return "success"
    } else {
      return "RNP Not Found"
    }
  } else {
    return "Script not Found"
  }

})
// await browser.close();
}, 100000)


