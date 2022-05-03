const loginPage = require('../pageobjects/loginPage')
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync("C:\webdriverio\test\testData\LoginTest.json"))
describe('E-commerce Application' , async()=>{   //test suite name 
    credentials.forEach( ({username , password})=>{
    it('Login fail Page' , async()=>               //test case name
    {                                 
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await browser.getTitle());
    
    //assertion
    await expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy");
    //CSS selector are best for webdriver io and Xpath 
    
    
      await  loginPage.Login(username ,password);
    
    
    //no login text
    console.log(await loginPage.alert.getText());
    await browser.waitUntil(async()=>await loginPage.signIn.getAttribute('value') === 'Sign In',
    {
        timeout: 5000,
        timeoutMsg: "Error message is not showing up"
    })
    console.log(await loginPage.alert.getText());
    await expect(await loginPage.textInfo).toHaveTextContaining("username is rahulshettyacademy and Password is learning");
    
    
    
    })
})    
    
    xit('Login Success page title' , async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await $("#username").setValue("rahulshettyacademy");
        await $("//input[@type='password']").setValue("learning");
        await $("#signInBtn").click();
    
        //wait until checkout button is displayed
    
       // await $("//h1[text()='Shop Name']").waitForExist();
        await browser.pause(2000);
        //assertion
        await expect(browser).toHaveUrlContaining("shop");
        await expect(browser).toHaveTitle("ProtoCommerce");
    
    
    
    })
    
    
    });