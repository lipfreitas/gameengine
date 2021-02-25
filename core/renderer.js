
var renderer = {
    initialize : async function (){
        let characters = document.querySelectorAll('character');
        console.log(characters);
        characters.forEach(function(character, index, list){
           let who = character.getAttribute('who');
           renderer.loadFile('./characters/' + who + '.json').finally(function (data){
               console.log(data);
           });
        })
    },
    loadFile : async function (path){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', path, true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    var obj = JSON.parse(xmlhttp.responseText);
                    var countryList = obj.countrylist;
                }
            }
        };
        return await xmlhttp.send(null);
    }
};
(function() {
    renderer.initialize();
})();
