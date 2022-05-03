const code = require('../pageobjects/letscodeit2')
var expectChai = require('chai').expect;

describe("Practice Page " , async()=>
{
    it("Radio Button " , async()=>
    {
        await browser.url("https://courses.letskodeit.com/practice");
        await code.radio.click();
        //assertion
        const isSelected = await code.radio.isSelected();
        expectChai(isSelected).to.equal(true);
        await browser.pause(2000);
    })

    it("DropDown Button" , async()=>
    {
        
        await code.dropDown.selectByVisibleText("Benz");
        //assertion
        expectChai(await code.dropDown.getValue()).to.equal("benz");
        expectChai(await code.dropDown.isDisplayed()).to.equal(true);
        await browser.pause(2000);
       
    })

    it("Multi Select Option" , async()=>
    {
    

        await code.multiSelect.selectByVisibleText("Orange");
        await code.multiSelect.selectByVisibleText("Peach");
        //assertion
        expectChai(await code.multiArray[1].isSelected()).to.equal(true);
        expectChai(await code.multiArray[2].isSelected()).to.equal(true);
        await browser.pause(2000);
    })

    it("CheckBox" , async()=>
    {
       

        await code.check1.click();
        await code.check2.click();
        await browser.pause(2000);
        //assertion
        expectChai(await code.check1.isSelected()).to.equal(true);
        expectChai(await code.check2.isSelected()).to.equal(true);

    })



    it("Open Window" , async()=>
    {
       
        await code.window.click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        let title = console.log(await browser.getTitle());
        //assertion
        
        await expect(code.assert1.toHaveTextContaining('All Courses'));

        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
 
        await expect(code.assert2.toHaveTextContaining('Practice Page'));



    })

    it("New Tab" , async()=>
    {
      
        
        
        await code.tab.click();
        const handles=await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        //assertion
    
        await expect(code.assert10.toHaveTextContaining('Category'));
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);

        await expect(code.assert20.toHaveTextContaining('Practice Page'));



  })

    it("Alert Switch" , async()=>
    {
      
     
        await code.alertinput.setValue("sarthak Purwar");
        await code.alertbtn.click();
        console.log(await browser.isAlertOpen());
        await browser.pause(2000);
        //assertion
        expectChai(await browser.isAlertOpen()).to.be.true;
        await browser.acceptAlert();

        await code.confirm.click();
        //assertion
        expectChai(await browser.isAlertOpen()).to.be.true;
        await browser.acceptAlert();

   })

   it("Enable Disable Functionality" , async()=>
   {
      
     
       await code.input.setValue("sarthak Purwar");
       await code.disable.click();
       expectChai(await code.input.isEnabled()).to.equal(false);
       await code.enable.click();
       expectChai(await code.input.isEnabled()).to.equal(true);
      

   })

   
   it("Hide Show Button" , async()=>
   {
       


       await code.input1.setValue("SarthaK");
       await code.hide.click();
       expectChai(await code.input1.isDisplayed()).to.equal(false);
       await code.show.click();
       expectChai(await code.input1.isDisplayed()).to.equal(true);
       
   })

   it("Mouse Hover " , async()=>
   {
       

       await code.mouseHover.scrollIntoView();
       await browser.pause(2000);
       await code.mouseHover.moveTo();
       await browser.pause(2000);
       await code.top.click();
       await browser.pause(2000);
       await code.mouseHover.scrollIntoView();
       await browser.pause(2000);
       await code.mouseHover.moveTo();
       await browser.pause(2000);
       await code.reload.click();
       await browser.pause(2000);


   })


    it("Iframe" , async()=>
    {
        

        await code.mouseHover1.scrollIntoView();
        await browser.pause(2000);
        console.log(await code.a.length);
        await browser.switchToFrame(await code.frame);
        console.log(await code.a.length);
        await code.course.click();
        await browser.pause(2000);
        expectChai(code.assert.toHaveTextContaining("'JavaScript for beginners'"));
        await browser.switchToFrame(null);
 
        await expect(code.asst.toHaveTextContaining('Practice Page'));






    })



})