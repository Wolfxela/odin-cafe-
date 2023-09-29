import { generalFuncModule as module } from "./generalFunctions";
const createHomePage = function(doc)
{
    const page = doc
    const homeDiv =  module.insertElement('div','homeContent',"",page)
    const homeTextDiv = module.insertElement('div','homeTextContent',"",homeDiv)

    module.insertElement('div','homeTitle',"Restaurant And Cafe!",homeTextDiv)
    module.insertElement('div','homeText','Enjoy our finest most delicious foods!',homeTextDiv)
    module.insertElement('img','homeImg','',homeDiv,"./images/homeImage.jpg")
    return homeDiv
}   


export{createHomePage}