function CardCatalogo({ catalogo }) {
    return (
        <section className="catalogo">
            <h2>Catalogo </h2>
            <ul>
                
                {catalogo.map((t) => (
                    <li key={t.id}>
                        {t.nome} · {t.categoria}
                    </li>
                ))}
                
            </ul>
        </section>
    );
}

export default CardCatalogo;