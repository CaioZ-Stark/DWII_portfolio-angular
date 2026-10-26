function CardProjeto({nome, descricao, tecnologias, link_github, ano, status}){
    return(
        <article className= "card">
            <h3>{nome}</h3>
            <p className= "meta">{tecnologias} . {ano}</p>
            <p>{descricao}</p>
            
            {link_github && <a>Ver no Github</a>}
        </article>
    );
}
export default CardProjeto;