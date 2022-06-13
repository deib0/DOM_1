console.dir(dom);
const parent = document.querySelector('#parent')
const child = document.querySelector('#child')
const sibling = document.querySelector('#sibling')
dom.class.add(parent, '4')
dom.class.remove(parent, '4')
console.log(dom.index(sibling)); 