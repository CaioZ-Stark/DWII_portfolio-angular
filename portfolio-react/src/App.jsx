import Cabecalho from './Cabecalho.jsx';
import CardProjeto from './CardProjeto.jsx';
import Rodape from './Rodape.jsx';
function App(){
  return(
    <>
      <Cabecalho />
      <main>
        <h2>Projeto</h2>
        <div className="cards">
         <CardProjeto
          nome="Portfolio Angular"
          descricao="Meu portfolio com Angular e Angular Material."
          tecnologias="Angular, TypeScript"
          link_github="https://github.com/CaioZ-Stark/2026-DWII-portfolio-angular"
          ano={2026}
/>
<CardProjeto
nome="API do Portfolio em PHP"
descricao="Endpoints de projetos e catalogo com PDO e MariaDB."
tecnologias="PHP, MariaDB"
link_github={null}
ano={2026}
/>
<CardProjeto
nome="Sistema de Cadastro v1"
descricao="CRUD em PHP do 1o trimestre."
tecnologias="PHP, MariaDB, Bootstrap"
link_github={null}
ano={2026}
/>
        </div>
      <p>Em breve, em React. </p>
    </main>
    <Rodape />
    </>
  );
}
export default App;