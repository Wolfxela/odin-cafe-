import { generalFuncModule as module } from "./generalFunctions";

const createAboutUsPage = function(doc)
{
    const page = doc
    const aboutUsPageDiv = module.insertElement('div','aboutUsContent','',page)
    const aboutUsTextDiv = module.insertElement('div','aboutUsText','',aboutUsPageDiv)
    module.insertElement('div','aboutUsTitle','Website made by Wolfxela for the Odin project!',aboutUsTextDiv)
    module.insertElement('div','aboutUsInfo','We are a small restaurant & cafe looking to bring our customers only the best, premium quality and fresh food and drinks!!',aboutUsTextDiv)
    module.insertElement('img','aboutUsImg','.',aboutUsPageDiv,"./images/AboutUs.jpg")
    return aboutUsPageDiv
}
export{createAboutUsPage}