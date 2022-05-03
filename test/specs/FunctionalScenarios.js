const expectchai = require('chai').expect
describe('Functional Testing on Application' ,()=>
{
    //scroll down
    xit('Scrolling & Mouse Hover' ,async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await $("#mousehover").scrollIntoView();
        await browser.pause(2000);
        await $("#mousehover").moveTo();
        await browser.pause(2000);
        await $("=Top").click();
        await browser.pause(2000);
    })

    //popups
    xit('PopUps' , async()=>
    {
        await browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.htm");       
        await $("button").doubleClick();
        console.log(await browser.isAlertOpen());
        await browser.pause(2000);
        expectchai(await browser.isAlertOpen()).to.be.true;
        //expectchai(browser.getAlertText()).to.equal("");

        await browser.acceptAlert();
        await  browser.pause(2000);

    })

    xit('Web Tables search  validations' ,async()=>
    {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        await $("input[type='search']").setValue("Tomato");
        await browser.pause(2000);
        const veggie = await $$("tr td:nth-child(1)");
        await expect(veggie).toBeElementsArrayOfSize({eq:1});
        console.log(await veggie[0].getText());
        await expect(await veggie[0]).toHaveTextContaining("Tomato");


    })
})