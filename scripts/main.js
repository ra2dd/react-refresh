const app = document.getElementById('main-div')
const para = document.createElement('p')
const paraContent = document.createTextNode('Text added with javascript.')

para.appendChild(paraContent)

app.appendChild(para)
