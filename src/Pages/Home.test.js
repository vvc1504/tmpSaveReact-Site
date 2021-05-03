// // import React from 'react';
// // import renderer from 'react-test-renderer';
// // import Home from './Home';
// import  puppeteer from 'puppeteer';

// test('Home snapshort testing',async()=>{
//      const browser = await puppeteer.launch({
//           headless:false,
//           slowMo:40
//      });
//      const page = await browser.newPage();
//      await page.goto('http://localhost:3001/');
//      // await page.click('#add-product')

//      await page.waitForTimeout(1000)
//      await page.click('#tour-link')
//      await page.waitForTimeout(1000)
//      await page.keyboard.press('ArrowRight')
// await page.waitForTimeout(1000)
//      await page.keyboard.press('ArrowRight')
//      // await page.type('#pname', 'product1')
//      // await page.waitForTimeout(1000)
//      // await page.type('#mrp', '5000')
//      // await page.waitForTimeout(1000)
//      // const end = await page.$eval(ArrowRight,(click)=>click.);

// //      const component=renderer.create(
// //           <Home name='test 123' /> 
// //      );
// //   let hometree=component.toJSON();
//   await browser.close();
// //   expect (page).toBe();

// },10000)


const assert = require('assert')
const puppeteer = require('puppeteer');

let browser , page;

beforeEach(async()=>{
     browser = await puppeteer.launch({
          headless:false
     });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/')
})
afterEach(async()=>{
     await browser.close();
})

test('testing AddProducts',async()=>{
  const url = await page.url();
  assert(url==='http://localhost:3000/')
},100000)

