function getBrowser(){
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function updateBrowser(){
    const larguraNav = getBrowser();
    document.getElementById("largura").textContent = larguraNav + "pixels";
}

window.addEventListener("resize", updateBrowser);

updateBrowser();

function clickMenu(){
    var menu = document.getElementById("lista");
    
    if(menu.style.display == 'block')
    {
        menu.style.display = 'none'
        
    } else { menu.style.display = 'block'}
}