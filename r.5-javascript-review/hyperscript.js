const createHTMLHelper = function (tagName) {
    return function (attributes = {}, ...children) {
        let element = document.createElement(tagName)
        for (let attribute in attributes) {
            let attributeValue = attributes[attribute]
            if (typeof attributeValue == 'function') {
                element.addEventListener(attribute, attributeValue)
            } else {
                element.setAttribute(attribute, attributeValue)
            }
        }
        element.append(...children)
        return element
    }
}

const div = createHTMLHelper('div')
const h2 = createHTMLHelper('h2')
const img = createHTMLHelper('img')
const p = createHTMLHelper('p')