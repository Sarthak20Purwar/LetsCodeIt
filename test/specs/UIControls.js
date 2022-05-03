const expectchai = require('chai').expect;
describe('UI Controls' , async()=>

{


xit('UI Controls' , async()=>
{
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");
    await $("//input[@type='password']").setValue("learning");
  
    //radio button
    //what if multiple element in same locator use $$
    const radioButtons = await $$(".radiotextsty");   
    const userDropdown = radioButtons[1];
    await userDropdown.click();
    

    //chaining the locators
    // const radioButtons1 = await $$(".customradio");
    // const userDropdown1 = radioButtons1[1];
    // await userDropdown1.$("span").click();

    //popup
   
    // await $(".model-body").waitForExist();
    const modal = await $(".modal-body");
    await $("#okayBtn").click();
    console.log(await $$(".customradio")[0].$("span").isSelected());
    await browser.pause(5000);
    
    //validate popup not displayed
    await $$(".customradio")[0].$("span").click();
    await expect(modal).not.toBeDisplayed();


   const dropdown = await $("select.form-control"); //select tag
   await dropdown.selectByAttribute('value' , 'teach');
   await browser.pause(3000);
   await dropdown.selectByVisibleText("Consultant");
   await browser.pause(3000);
   await dropdown.selectByIndex(0);
   await browser.pause(3000);
   console.log(await dropdown.getValue());
     // chai assertion
   expectchai(await dropdown.getValue()).to.equal("stud");

})



//dropDown
xit('Dynamic Dropdown Controls ',async()=>
{
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#autocomplete").setValue("ind");
    await browser.pause(2000);
    let item = $$("[class='ui-menu-item'] div");
    for(var i=0 ; i<await item.length;i++)
    {
        await item[i].getText();
        if(await item[i].getText()==="India")
        {
            await item[i].click();
            await browser.pause(2000);
        }
    }
})

//checkBox
xit('Checkboxes Identification' , async ()=> {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    const element = $$("input[type='checkbox']");
    await element[1].click();
    console.log(await element[1].isSelected());

    await browser.saveScreenshot("screenshot.png");
})


})