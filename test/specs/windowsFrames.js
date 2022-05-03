describe('Windows and Frames' ,async()=>
{
 
    xit('Parent and Child window switch' ,async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await $(".blinkingText").click();
        const handles = await browser.getWindowHandles(); //array of windows
        await browser.switchToWindow(handles[1]);
        console.log(await $("//strong[text()=' Learn Earn & Shine']").getText());
        console.log(await browser.getTitle());
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        console.log(await browser.getTitle());

        //new window and tab by URL
        await browser.newWindow("https://rahulshettyacademy.com");
        console.log(await browser.getTitle());
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/");



    })

    xit('IFrame Example' ,async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await $("#mousehover").scrollIntoView();
        console.log(await $$("a").length);
        await browser.switchToFrame(await $("[id='courses-iframe']"));
        console.log(await $("=Courses").getTagName());
        console.log(await $$("a").length);
        await browser.switchToFrame(null);
        console.log(await $$("a").length);
        

    })




})