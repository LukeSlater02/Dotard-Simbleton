import { useData } from "./businessData.js";
import {businessToHTML} from "./business.js"



export const displayData = () => {
    const selector = document.querySelector(".business-card")
    const businessArray = useData(0,5)
    
    businessArray.forEach((businessArray) => {
        selector.innerHTML += businessToHTML(businessArray)
    })
}


export const displayNewYork = () => {
    const newYorkFilter = useData().filter(business => {
        return business.addressStateCode === "NY"
    })
    const selector = document.querySelector(".newYork-card")
    newYorkFilter.forEach(select => {
        selector.innerHTML += businessToHTML(select)
    })
}





