function customrender(reactElement,mainContainer){
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children

    domElement.setAttribute('href',reactElement.props.href)//setting attrribute
    domElement.setAttribute('target',reactElement.props.target)

    mainContainer.appendChild(domElement)
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children

    for (const prop in reactElement.props) {
            if(prop==reactElement.children){
                continue;
            }

            domElement.setAttribute(prop,reactElement.props[prop])
            mainContainer.appendChild(domElement)
    }
}

const reactElement= {
    type:'div',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')

customrender(reactElement,mainContainer)
