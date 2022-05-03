const codey = require('../pageobjects/letscodeit2')
var expectChai = require('chai').expect;

describe("Practice Page " , async()=>
{
    it("Radio Button " , async()=>
    {
        await browser.url("https://courses.letskodeit.com/practice");
        await codey.radio.click();
        //assertion
        const isSelected = await radio.isSelected();
        expectChai(isSelected).to.equal(true);
        await browser.pause(2000);
    })

//     it("DropDown Button" , async()=>
//     {
//         let dropdown=await $("#carselect");
//         await dropdown.selectByVisibleText("Benz");
//         //assertion
//         expectChai(await dropdown.getValue()).to.equal("benz");
//         expectChai(await dropdown.isDisplayed()).to.equal(true);
//         await browser.pause(2000);
       
//     })

//     it("Multi Select Option" , async()=>
//     {
    
//         let multiArray = await $$("#multiple-select-example option");
//         let multiSelect = await $("#multiple-select-example");
//         await multiSelect.selectByVisibleText("Orange");
//         await multiSelect.selectByVisibleText("Peach");
//         //assertion
//         expectChai(await multiArray[1].isSelected()).to.equal(true);
//         expectChai(await multiArray[2].isSelected()).to.equal(true);
//         await browser.pause(2000);
//     })

//     it("CheckBox" , async()=>
//     {
       
//         let check1= $("#bmwcheck");
//         let check2=$('#benzcheck');
//         await check1.click();
//         await check2.click();
//         await browser.pause(2000);
//         //assertion
//         expectChai(await check1.isSelected()).to.equal(true);
//         expectChai(await check2.isSelected()).to.equal(true);

//     })



//     it("Open Window" , async()=>
//     {
       
//         let window = $("#openwindow");
//         await window.click();
//         const handles = await browser.getWindowHandles();
//         await browser.switchToWindow(handles[1]);
//         let title = console.log(await browser.getTitle());
//         //assertion
//         let assert1= $("//*[@class='dynamic-heading margin-bottom-20']");
//         await expect(assert1.toHaveTextContaining('All Courses'));

//         await browser.closeWindow();
//         await browser.switchToWindow(handles[0]);
//         let assert2 = $("//h1[text()='Practice Page']");
//         await expect(assert2.toHaveTextContaining('Practice Page'));



//     })

//     it("New Tab" , async()=>
//     {
      
        
//         let tab = $("#opentab");
//         await tab.click();
//         const handles=await browser.getWindowHandles();
//         await browser.switchToWindow(handles[1]);
//         //assertion
//         let assert1 = $("//*[text()='Category']");
//         await expect(assert1.toHaveTextContaining('Category'));
//         await browser.closeWindow();
//         await browser.switchToWindow(handles[0]);
//         let assert2 = $("//h1[text()='Practice Page']");
//         await expect(assert2.toHaveTextContaining('Practice Page'));



//     })

//     it("Alert Switch" , async()=>
//     {
      
//         let alertinput = $("//*[@id='name' and @class='inputs']");
//         let alertbtn=$("#alertbtn");
//         let confirmbtn = $("#confirmbtn");
//         await alertinput.setValue("sarthak Purwar");
//         await alertbtn.click();
//         console.log(await browser.isAlertOpen());
//         await browser.pause(2000);
//         //assertion
//         expectChai(await browser.isAlertOpen()).to.be.true;
//         await browser.acceptAlert();

//         await confirmbtn.click();
//         //assertion
//         expectChai(await browser.isAlertOpen()).to.be.true;
//         await browser.acceptAlert();

//    })

//    it("Enable Disable Functionality" , async()=>
//    {
      
//        let input = $("#enabled-example-input");
//        let disable = $("#disabled-button");
//        let enable = $("#enabled-button");
//        await input.setValue("sarthak Purwar");
//        await disable.click();
//        expectChai(await input.isEnabled()).to.equal(false);
//        await enable.click();
//        expectChai(await input.isEnabled()).to.equal(true);
      

//    })

   
//    it("Hide Show Button" , async()=>
//    {
       
//        let input = $("#displayed-text");
//        let hide = $("#hide-textbox");
//        let show =$("#show-textbox");

//        await input.setValue("SarthaK");
//        await hide.click();
//        expectChai(await input.isDisplayed()).to.equal(false);
//        await show.click();
//        expectChai(await input.isDisplayed()).to.equal(true);
       
//    })

//    it("Mouse Hover " , async()=>
//    {
       
//        let mouseHover= $("#mousehover");
//        let top=$("=Top");
//        let reload=$("=Reload");
//        await mouseHover.scrollIntoView();
//        await browser.pause(2000);
//        await mouseHover.moveTo();
//        await browser.pause(2000);
//        await top.click();
//        await browser.pause(2000);
//        await mouseHover.scrollIntoView();
//        await browser.pause(2000);
//        await mouseHover.moveTo();
//        await browser.pause(2000);
//        await reload.click();
//        await browser.pause(2000);


//    })


//     it("Iframe" , async()=>
//     {
        
//         let mouseHover= $("#mousehover");
//         let frame = $("#courses-iframe");
//         let course = $(".img-responsive");
//         let assert= $("//h2[text()='JavaScript for beginners']");
//         let button = $("//button[text()='Enroll in Course']");
//         await mouseHover.scrollIntoView();
//         await browser.pause(2000);
//         console.log(await $$("a").length);
//         await browser.switchToFrame(await frame);
//         console.log(await $$("a").length);
//         await course.click();
//         await browser.pause(2000);
//         expectChai(assert.toHaveTextContaining("'JavaScript for beginners'"));
//         await browser.switchToFrame(null);
//         let assert2 = $("//h1[text()='Practice Page']");
//         await expect(assert2.toHaveTextContaining('Practice Page'));






//     })



})