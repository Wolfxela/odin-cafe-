import { generalFuncModule as module } from "./generalFunctions";

const createContactPage = function(doc)
{
    const page = doc
    const contactPageDiv = module.insertElement('div','contactContent','',page)
    module.insertElement('div',"contactTitle","You may contact us here",contactPageDiv)
    module.insertElement('div',"contactSource","exampleEmail@.com",contactPageDiv)
    module.insertElement('div',"contactSource","exampleEmail@.com",contactPageDiv)
    module.insertElement('div',"contactSource","Our phone: 440:examplePhone",contactPageDiv)
    return contactPageDiv
}
export {createContactPage}