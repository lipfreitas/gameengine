var renderer = {
    initialize : async function (){
        let characters = document.querySelectorAll('character');
        characters.forEach(function(character, index, list){
           let who = character.getAttribute('who');
            main.http.async('characters/' + who + '.json', function(data){
                character.innerHTML= renderer.character.build(data);
                character.setAttribute('speed', data.speed)
                character.style.position = 'absolute';
            })
        })
    },
    character: {
        build : function(data){
            var element = document.createElement('div');
            element.innerHTML = this.sprite(data.img);
            element.firstChild.style.height = data.height;
            element.firstChild.style.width = data.width;

            return element.innerHTML;
        },
        sprite: function (img){
            return '<img src="sprites/'+ img + '">'
        },
        move: function (direction, who){
            let whoelement = document.querySelectorAll('character[who='+who+']').item(0);
            if(direction === 'down'){
                let curY = parseInt(whoelement.style.marginTop.replace('px','') ,10)|| 0;
                let movement = curY  + parseInt(whoelement.getAttribute('speed'));
                whoelement.style.marginTop = movement + "px";
            }
            if(direction === 'up'){
                let curY = parseInt(whoelement.style.marginTop.replace('px','') ,10)|| 0;
                let movement = curY  - parseInt(whoelement.getAttribute('speed'));
                whoelement.style.marginTop = movement + "px";
            }
            if(direction === 'right'){
                let curX = parseInt(whoelement.style.marginLeft.replace('px','') ,10)|| 0;
                let movement = curX + parseInt(whoelement.getAttribute('speed'));
                whoelement.style.marginLeft = movement + "px";
            }
            if(direction === 'left'){
                let curX = parseInt(whoelement.style.marginLeft.replace('px','') ,10)|| 0;
                let movement = curX - parseInt(whoelement.getAttribute('speed'));
                whoelement.style.marginLeft = movement + "px";
            }
        }
    }
};

