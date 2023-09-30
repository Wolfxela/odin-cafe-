import { generalFuncModule as module } from "./generalFunctions";
import { createHomePage } from "./homePage";
import { createMenuPage } from "./menuPage";
import { createContactPage } from "./contactPage";
import { createAboutUsPage } from "./aboutUsPage";



const headerMaker = function(inputPage)
{
    const page = inputPage;
    const headerDiv = module.insertElement('div','header','',page)
    const titleDiv = module.insertElement('div','title','',headerDiv)
    const titleContentDiv = module.insertElement('div','titleContent','Creme Cafe',titleDiv)
    module.insertElement('img','','',titleDiv,"./images/coffee.svg")
    const navigationDiv = module.insertElement('nav','navigation','',headerDiv)
    const homeButton = module.insertElement('div','home','Home',navigationDiv)
    const menuButton = module.insertElement('div','menu','Menu',navigationDiv)
    const contactsButton = module.insertElement('div','contacts','Contacts',navigationDiv)
    const aboutUsButton = module.insertElement('div','aboutUs','About Us',navigationDiv)
    titleContentDiv.addEventListener("click",function(){websiteManager.switchPage(createHomePage(websiteManager.getPage()))})
    homeButton.addEventListener("click",function(){websiteManager.switchPage(createHomePage(websiteManager.getPage()))})
    menuButton.addEventListener("click",function(){websiteManager.switchPage(createMenuPage(websiteManager.getPage()))})
    contactsButton.addEventListener("click",function(){websiteManager.switchPage(createContactPage(websiteManager.getPage()))})
    aboutUsButton.addEventListener("click",function(){websiteManager.switchPage(createAboutUsPage(websiteManager.getPage()))})



}

headerMaker(document.querySelector(".content"));

const websiteManager = (function()
{
    const page = document.querySelector(".content");
    let currentPage = createHomePage(page);

    const switchPage = function(inputPage)
    {
        page.removeChild(currentPage)
        currentPage = inputPage;
    }
    const getPage = ()=>{return page}
    return {switchPage,getPage}
})();