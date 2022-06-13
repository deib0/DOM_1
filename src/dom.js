window.dom = {
    create(string) {
        const container = document.createElement('div')//template可以容纳任意标签
        container.innerHTML = string
        return container.children[0]
    },
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, child) {
        parent.appendChild(child)
    },
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent.node)
    },
    //  删
    remove(node) {
        node.parentNode.removeChild(node)
    },
    empty(node) {
        // node.innerHTML = ''
        const array = []
        for (let i = 0; i < node.childNodes.length;) {
            dom.remove(node.childNodes[i])
            console.log(node.childNodes);
            array.push(node.childNodes[i])
        }
        return array
    },
    //  改
    attr(node, key, value) {
        if (arguments.length === 3) {
            node.setAttribute(key, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(key)
        }
    },
    text(node, string) {
        if (arguments.length === 1) {
            return node.innerText
        } else {
            node.innerText = string
        }
    },
    html(node, string) {
        if (arguments.length === 1) {
            return node.innerHTML
        } else {
            node.innerHTML = string
        }
    },
    style(node, name, value) {
        if (arguments.length === 2) {
            if (name instanceof Object) {
                for (let key in name) {
                    node.style[key] = name[key]
                }
            } else if (typeof (name) === 'string') {
                return node[name]
            } else if (arguments.length === 3) {
                node.style[name] = value
            }
        }
    },
    class: {
        add(node, name) {
            node.classList.add(name)
        },
        remove(node, name) {
            node.classList.remove(name)
        },
    },
    on(node, name, fn) {
        node.addEventListener(name, fn)
    },
    off(node, name, fn) {
        node.removeEventListener(name, fn)
    },
    //  查
    find(string, scope) {
        return (scope || document).querySelectorAll(string)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children)//  将伪数组转换为数组
            .filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    prev(node) {//  nodeType
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodes, fn) {
        for (let i = 0; i < nodes.length; i++) {
            fn(nodes[i])
        }
    },
    index(node) {
        let list = node.parentNode.children
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
}
