function clickMenu(){
    var menu = document.getElementById("lista");
    var menuzinho = document.getElementById("hamb-menu");
    
    if(menu.style.display == 'flex')
    {
        menu.style.display = 'none'
        menuzinho.style.color = "red";

    } else { menu.style.display = 'flex'
    menuzinho.style.color = "red";}
}

function showPage(num)
{
    if(num == 3)
    {
        alert(`
        Em desenvolvimento. . .

        WhatsApp:  (16) 99403 - 1316
        Ligação:      (16) 99268 - 3210
        
        email: eusougiovany@gmail.com`)
    }
    else
    {
        alert('Página em desenvolvimento. . .')
    }
}

/*Change animation on title*/
const boxTitle = document.querySelector(".text-reveal")
setTimeout(() => {
    boxTitle.classList.add("modify")
    alert('work')
}, 1000);