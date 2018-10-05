
var getStyle = function(element, styleName) {
    //var computedStyle = window.getComputedStyle(element);
    console.log(element.getCssValue("display"))
    return element.style[styleName];
}

var StyleHelper = {
    getStyle: getStyle
};

module.exports = StyleHelper;
