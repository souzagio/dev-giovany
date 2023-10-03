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

function showPage(num)
{
    if(num == 3)
    {
        alert(`
        WhatsApp:  (16) 99403 - 1316
        Ligação:      (16) 99268 - 3210`)
    }
    else
    {
        alert('Página em desenvolvimento. . .')
    }
}