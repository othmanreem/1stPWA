function Element(type, attrs, parent, quan) {

    this.m_construct()
    return this.createElem(type, attrs, parent, quan)


}

Element.prototype.m_construct = function () {

}

Element.prototype.createElem = function (type, attrs, parent, quan) {
    var elem;
    for (var i = 0; i < quan; i++) {
        elem = document.createElement(type);
        parent.appendChild(elem);
        attrs.forEach(function (pair) {
            for (var name in pair) {
                elem.setAttribute(name, pair[name]);
            }

        });
        // elem.setAttribute(attr, attrVal);
        console.log(elem)
        console.log(parent)


        console.log(parent)
    }

    return elem
}

