function responsivo(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
}
/*
    document.querySelectorAll('a').forEach(link=>{
        const conteudo = document.getElementById('conteudo')
        link.onclick = function(e){
            e.preventDefault()
            fetch(link.href)
            .them(resp => resp.text())
            .them(html => conteudo.innerHTML = html)
        }
    })
 */
