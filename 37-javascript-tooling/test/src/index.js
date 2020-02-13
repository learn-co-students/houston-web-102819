import { name } from './constants.js' // default import
import { message } from './module.js' // default import

console.log('index', name)

let header = document.createElement('h1')
header.innerText = message
document.body.append(header)