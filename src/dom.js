window.dom = {
    find(selector) {
        return document.querySelectorAll(selector)
    },
    style(element, style_key, style_value) {
        element.style[style_key] = style_value
    },

    each(list, fn) {
        for (let i = 0; i < list.length; i++) {
            fn(list[i])
        }
    }
}
