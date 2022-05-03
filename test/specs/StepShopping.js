//const expectchai = require('chai').expect
//const { addProductsToCart } = require('../pageobjects/shop');
const shopPage = require('../pageobjects/shop');
const loginPage = require('../pageobjects/loginPage')
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
   
    // const productPrices = await $$("//tr/td[4]/strong");
    // //string=>int
    // const sumOfproducts=(await Promise.all(await productPrices.map( async (productPrices)=> parseInt((await productPrices.getText()).split(".")[1].trim()))))
    // .reduce((acc,price)=>acc+price,0);
    // console.log(sumOfproducts);

    // const TotalValue = await $("h3 strong").getText();
    // const totalIntValue=parseInt(TotalValue.split(".")[1].trim());
    // await expectchai(sumOfproducts).to.equal(totalIntValue);

    // await $(".btn-success").click();
    // await $("#country").setValue("ind");
    // await $(".lds-ellipsis").waitForExist({reverse:true});
    // await $("=India").click();
    // await $("input[type='submit']").click();
    // await expect($(".alert-success")).toHaveTextContaining("Success");


    })
})