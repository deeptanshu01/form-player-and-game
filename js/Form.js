class Form{
    constructor(){

    }

    display(){
        var title = createElement("H2");
        title.html("Asphalt 11");
        title.position(130,0);
        var input = createInput("name");
        input.position(130,160);
        var button=createButton("Play");
        button.position(250,200);
        var greeting=createElement("H3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name =input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello player "+name);
            greeting.position(130,160);
        })

    }
}