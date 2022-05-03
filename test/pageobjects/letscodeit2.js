class Code
{
   get radio()
   {
       return $("#benzradio");
   }

   get dropDown()
   {
       return $("#carselect");
   }

   get multiArray()
   {
       return $$("#multiple-select-example option");
   }

   get multiSelect()
   {
       return $("#multiple-select-example");
   }

   get check1()
   {
     return $("#bmwcheck");
   }

   get check2()
   {
       return $('#benzcheck');
   }

   get window()
   {
       return $("#openwindow");
   }

   get assert1()
   {
       return  $("//*[@class='dynamic-heading margin-bottom-20']");
   }

   get assert2()
   {
       return $("//h1[text()='Practice Page']");
   }

   get tab()
   {
       return $("#opentab");
   }

   get assert10()
   {
       return $("//*[text()='Category']");
   }

   get assert20()
   {
       return $("//h1[text()='Practice Page']");
   }


   get alertinput()
   {
       return  $("//*[@id='name' and @class='inputs']");
   }

   get alertbtn()
   {
       return $("#alertbtn");
   }

   get confirm()
   {
       return $("#confirmbtn");
   }

   get input()
   {
       return  $("#enabled-example-input");
   }

   get disable()
   {
       return $("#disabled-button");
   }

   get enable()
   {
       return $("#enabled-button");
   }

   get input1()
   {
       return $("#displayed-text");
   }

   get hide()
   {
       return $("#hide-textbox");
   }

   get show()
   {
       return $("#show-textbox");
   }


   get mouseHover()
   {
       return $("#mousehover");
   }

   get top()
   {
       return $("=Top");
   }

   get reload()
   {
       return $("=Reload");
   }


   get mouseHover1()
   {
       return $("#mousehover");
   }

   get frame()
   {
       return $("#courses-iframe");
   }

   get course()
   {
       return $(".img-responsive");
   }

   get assert()
   {
       return $("//h2[text()='JavaScript for beginners']");
   }

   get button()
   {
       return $("//button[text()='Enroll in Course']");
   }

   get a()
   {
       return $$("a");
   }

   get asst()
   {
       return $("//h1[text()='Practice Page']");
   }




















}


module.exports = new Code()