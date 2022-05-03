class Confirm
{

get successButton()
{
    return  $(".btn-success");
}

get Country()
{
    return $("#country");
}

get assertion()
{
    return $(".lds-ellipsis");
}

get India()
{
    return $("=India");
}

get submitButton()
{
    return $("input[type='submit']");
}

get alert()
{
    return $(".alert-success");
}

}






module.exports = new Confirm();