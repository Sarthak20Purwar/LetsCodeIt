//async=> this is asynchronous code and wait until the promise get resolved
//webdriverio Async(No guarantee of sequence)
//Promise(resolved , pending , rejected)

/*
CSS Selector
id=>  #id
class=> .class
tagname[attribute='value']=> input[name='username']
tagname=>p
ParentTag ChildTag=> 


Xpath
//tagname[@attribute='value']

*/



describe('E-commerce Application' , async()=>{   //test suite name 
    
it('Login fail Page' , async()=>               //test case name
{                                 
await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await browser.getTitle());

//assertion
await expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy");
//CSS selector are best for webdriver io and Xpath 


//username field
await $("#username").setValue("rahulshettyacademyu");
await browser.pause(2000);
await $("input[name='username']").setValue("Second Css");
await browser.pause(2000);

//password field
await $("//input[@type='password']").setValue("learning");
await $("#signInBtn").click();


//no login text
console.log(await $(".alert-danger").getText());
await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === 'Sign In',
{
    timeout: 5000,
    timeoutMsg: "Error message is not showing up"
})
console.log(await $(".alert-danger").getText());
await expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning");



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