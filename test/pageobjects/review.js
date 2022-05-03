class ReviewPage
{
    get productPrices()
    {
        return $$("//tr/td[4]/strong");
    }

    get totalPrice()
    {
        return $("h3 strong");
    }


    
    async sumOfProducts()
    {
        const sumOfproducts=(await Promise.all(await this.productPrices.map( async (productPrices)=> parseInt((await productPrices.getText()).split(".")[1].trim()))))
        .reduce((acc,price)=>acc+price,0);
        console.log(sumOfproducts);
    }

    async totalFormatedPrice()
    {
        
    const TotalValue = await this.totalPrice.getText();
    const totalIntValue=parseInt(TotalValue.split(".")[1].trim());

    }

}

module.exports = new ReviewPage()