import { useState, useEffect } from 'react';
import API from './api.js';
import Cabecalho from './Cabecalho.jsx';
import CardProjeto from './CardProjeto.jsx';
import Rodape from './Rodape.jsx';
import Contato from './Contato.jsx';
import CardCatalogo from './Catalogo.jsx';
function App(){
  const [catalogo, setCatalogo] = useState([]);
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  async function buscarProjetos() {
    try{
      const responta = await(fetch(API + '/api/projetos'));
      if (!responta.ok){
        throw new Error('a API respondeu' + responta.status);
      }
      const dados = await responta.json();
      setProjetos(dados);

    }catch(falha){
      setErro('Não deu para carregar os projetos: ' + falha.message);
    }   
    
  }

  async function buscarCatalogo(){
    try{
    const responta = await(fetch(API + '/api/tecnologias'));
    if(!responta.ok){
      throw new Error('a API respondeu' + responta.status);
    }
    const dados = await responta.json();
    setCatalogo(dados);
    }catch(falha){
      setErro('Não deu para carregar as tecnologias: ' + falha.message);
    }
    
  }
  useEffect(() => {
  async function carregarDados() {
    try {
      await Promise.all([
        buscarProjetos(),
        buscarCatalogo()
      ]);
    } finally {
      setCarregando(false);
    }
  }

  carregarDados();
}, []);
  return(
    <>
      <Cabecalho />
      <main>
        <h2>Projeto</h2>
        {carregando && <p>Carregando projetos...</p>}
        {erro && <p className="erro">{erro}</p>}
        <div className="cards">
          {projetos.map((p)=> (
         <CardProjeto
          key={p.id}
          nome={p.nome}
          descricao={p.descricao}
          tecnologias={p.tecnologias}
          link_github={p.link_github}
          ano={p.ano}
/>
))}
</div>

<div className="cards">
    
    <CardCatalogo catalogo={catalogo}
    />
</div>
<Contato />
    </main>
    <Rodape />
    </>
  );
}
export default App;