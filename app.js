function Pesquisar() {
        let section = document.getElementById("resultados-pesquisa")
        section.innerHTML = "";
        let resultados = "";
        let titulo = '';
        let descricao = '';
    //campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    

    //se o campo for uma string sem nada
    if (!campoPesquisa){
        section.innerHTML = "<p>Atleta nao encontrado.</p>"
        return
    }

    //para cada dado dentro da lista
    for (let dado of dados){
        titulo = dado.descricao.toLowerCase();
        descricao = dado.descricao.toLowerCase();
                
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){

            //criar um novo elemento
            resultados += 
        `<div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>`
    }

    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado...</p>"
    }

        section.innerHTML = resultados

    console.log(dados)
}
