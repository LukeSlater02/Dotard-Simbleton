export const businessToHTML = (businessDataObj) => {
    return `
    <h2 class="business-name">${businessDataObj.companyName}</h2>
    <br>${businessDataObj.addressFullStreet}
    <br>${businessDataObj.addressCity}, ${businessDataObj.addressStateCode} ${businessDataObj.addressZipCode}
    <hr>
    `
}