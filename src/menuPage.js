import { generalFuncModule as module } from "./generalFunctions";
const products= []
const createMenuPage = function(doc)
{
    const page = doc;
    const menuContentDiv = module.insertElement('div','menuContent','',page)
    module.insertElement('div','menuTitle','Menu',menuContentDiv)
    const menuItemsDiv = module.insertElement('div','menuItems','',menuContentDiv)
    

    //creating every item in a for loop using the array data
    for(let i = 0;i<5;i++)
    {
        const itemDiv = module.insertElement('div','item','',menuItemsDiv)
        module.insertElement('img','itemImage','',itemDiv,products[i].getImg())
        const itemContentDiv = module.insertElement('div','itemContent','',itemDiv)
        module.insertElement('div','itemName',products[i].getName(),itemContentDiv)
        module.insertElement('div','Price',products[i].getPrice(),itemContentDiv)
        module.insertElement('div','description',products[i].getDescription(),itemDiv)
        
    }
    return menuContentDiv

};

const productFactory = function(productName,productPrice,productImage,productDescription)
{
    const Name = productName
    const Price = productPrice
    const Image = productImage
    const Description = productDescription

    const getName = ()=>{return Name}
    const getPrice = ()=>{return Price}
    const getImg = ()=>{return Image}
    const getDescription = ()=>{return Description}

    

    return{getName,getPrice,getImg,getDescription}


}
const black_coffee = productFactory("Black Coffee \u00A0 ","3.60$", "./images/black_coffee.png","Coffee Beans, Water and a Secret Ingredient!")
const espresso = productFactory("Espresso \u00A0 ","7.50$","./images/espresso.png","Coffee Beans, Milk and Water")
const hash_browns = productFactory("Hash Browns \u00A0 ","8.35$","./images/hash_browns.png","Eggs, Potatoes and Spices, all fresh from the store!")
const Soup = productFactory("Soup \u00A0 ","10.95$","./images/pumpkin_soup.png","A simple pumpkin soup to start your day with!")
const croissant = productFactory("Croissant \u00A0 ","3$","./images/croissant.png","A delicious Chocolate Filled croissant, perfect with an Espresso!")
products.push(black_coffee)
products.push(espresso)
products.push(hash_browns)
products.push(Soup)
products.push(croissant)

export {createMenuPage}