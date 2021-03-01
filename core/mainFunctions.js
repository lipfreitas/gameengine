var main = {
    initialize: function () {
        this.controls.initialize();
    },
    http: {
        async: function (url, callback) {
            console.log('called')
            var promise = new Promise(function (resolve, reject) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open('GET', url);
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4) {
                        if (xmlhttp.status == 200) {
                            resolve(JSON.parse(xmlhttp.responseText));
                        }
                    }
                };
                xmlhttp.send(null);
            });
            promise.then(function (val) {
                callback(val);
            });
        }
    },
    controls: {
        keyState : {},
        initialize: function(){
            main.controls.get();
        },
        get: function () {
            window.addEventListener('keydown',function(e){
                main.controls.keyState[e.keyCode || e.which] = true;
            },true);
            window.addEventListener('keyup',function(e){
                main.controls.keyState[e.keyCode || e.which] = false;
            },true);
            main.controls.watch();
        },
        watch : function(){
            ( main.controls.keyState[87]) ? renderer.character.move('up', 'main') : null;
            (main.controls.keyState[65]) ? renderer.character.move('left', 'main'): null;
            (main.controls.keyState[83]) ? renderer.character.move('down', 'main'): null;
            (main.controls.keyState[68]) ? renderer.character.move('right', 'main'): null;
            setTimeout(main.controls.watch, 10);
        }
    }
}
// (function() {
//     main.controls.initialize();
// })();