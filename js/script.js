function clickMenu(){
    var menu = document.getElementById("lista");
    var menuzinho = document.getElementById("hamb-menu");
    
    if(menu.style.display == 'block')
    {
        menu.style.display = 'none'
        menuzinho.style.color = "red";

    } else { menu.style.display = 'block'
    menuzinho.style.color = "red";}
}