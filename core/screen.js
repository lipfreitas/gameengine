var path = require('path');
var screen = {
    menu: function(menuName){
        return path.join(__dirname, `../menus/${menuName}.html`)
    }
};
module.exports = screen;
