const expectchai = require('chai').expect
const loginPage = require('../pageobjects/loginPage')
const shopPage = require("../pageobjects/shop")
const reviewPage = require("../pageobjects/review")
const confirm = require("../pageobjects/confirm")
describe('Ecommerce Application' , async()=>
{
    it('End to End Test' ,async ()=>
    {
       
    const products=['iphone X','Blackberry'];    
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await loginPage.Login("rahulshettyacademy" , "learning");
    await browser.pause(2000);
    await shopPage.addProductsToCart(products);
    await shopPage.checkout.click();


     const sumOfProducts = await reviewPage.sumOfProducts();
     const totalIntValue = await reviewPage.totalFormatedPrice();
    await expectchai(sumOfProducts).to.equal(totalIntValue);

    await confirm.successButton.click();
    await confirm.Country.setValue("ind");
    await confirm.assertion.waitForExist({reverse:true});
    await confirm.India.click();
    await confirm.submitButton.click();
    await expect(confirm.alert).toHaveTextContaining("Success");


    })
})