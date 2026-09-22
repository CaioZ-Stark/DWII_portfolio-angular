2026-DWII — Desenvolvimento Web II

Repositório desenvolvido para as atividades da disciplina Desenvolvimento Web II, utilizando Angular, TypeScript, HTML, CSS, PHP e MariaDB.

Professor: Prof. Dr. João Henrique Berssanette
Instituição: IFPR — Centro de Referência Ponta Grossa
Ano: 2026

👤 Estudante

Nome: Caio Mario Zachesky Junior
Turma: 3º ano — Técnico em Informática Integrado ao Ensino Médio
Ano: 2026

📚 Atividade 10 — Estrutura Inicial
📌 Descrição

Nesta atividade foi iniciada a estrutura do projeto de portfólio utilizando Angular.

O objetivo foi criar a base da aplicação e organizar os arquivos, componentes e páginas que seriam utilizados durante o desenvolvimento das próximas atividades.

📁 Estrutura do Repositório
Pasta	Conteúdo
portfolio-angular	Projeto principal desenvolvido com Angular
portfolio-angular/src/app	Componentes e páginas da aplicação
🔗 Como executar

Entre na pasta do projeto:

cd portfolio-angular

Instale as dependências:

npm install

Execute o projeto:

ng serve
💻 Versões utilizadas
Angular CLI       : 21.2.19
Node.js           : 24.14.0
Package Manager   : npm 11.9.0
Operating System  : linux x64

Para verificar as versões instaladas:

node -v
npm -v
ng version
📚 Atividade 12 — Integração com API
📌 Descrição do Projeto

Este projeto consiste no desenvolvimento de um portfólio pessoal utilizando Angular, desenvolvido durante a disciplina de Desenvolvimento Web II.

O projeto possui uma aplicação frontend desenvolvida em Angular e uma API desenvolvida em PHP, responsável por fornecer os dados armazenados no banco de dados MariaDB.

O portfólio apresenta informações pessoais, acadêmicas e profissionais, além de projetos desenvolvidos e um catálogo de tecnologias.

📁 Estrutura do Repositório
Pasta/Arquivo	Conteúdo
portfolio-angular	Arquivos principais do projeto Angular, incluindo configurações e dependências
portfolio-angular/src/app	Componentes e páginas da aplicação
portfolio-angular/src/app/home	Página inicial do portfólio
portfolio-angular/src/app/sobre	Página com informações pessoais, acadêmicas e profissionais
portfolio-angular/src/app/projetos	Página que exibe os projetos cadastrados e integrados ao banco de dados
portfolio-angular/src/app/contat	Página de contato do portfólio
portfolio-angular/src/app/catalogo	Página de catálogo de tecnologias
api	Arquivos responsáveis pelos endpoints da API
api/projetos.php	Endpoint responsável pelos dados dos projetos
api/tecnologias.php	Endpoint responsável pelos dados das tecnologias
conexao.php	Arquivo responsável pela conexão com o banco de dados
sql/setup.sql	Script para criação e configuração do banco de dados
🔌 API

A API do projeto foi desenvolvida em PHP e utiliza MariaDB para armazenar os dados.

Endpoints
Endpoint	Método	Descrição
/api/projetos.php	GET	Retorna os projetos publicados em formato JSON
/api/tecnologias.php	GET	Retorna as tecnologias cadastradas em formato JSON

Os endpoints utilizam:

Content-Type: application/json
📚 Atividade 13 — Consumo de API
📌 Descrição do Projeto

O projeto consiste no desenvolvimento de um portfólio pessoal utilizando Angular, desenvolvido durante a disciplina de Desenvolvimento Web II.

O portfólio apresenta informações pessoais, acadêmicas e profissionais, além de projetos desenvolvidos e um catálogo de tecnologias.

As páginas de Projetos e Catálogo consomem dados de uma API por meio de services do Angular. Os dados são obtidos do banco de dados e exibidos dinamicamente na aplicação.

📁 Estrutura do Projeto
Pasta/Arquivo	Conteúdo
portfolio-angular	Arquivos principais do projeto Angular
portfolio-angular/src/app	Componentes, páginas e services da aplicação
portfolio-angular/src/app/home	Página inicial do portfólio
portfolio-angular/src/app/sobre	Página com informações pessoais, acadêmicas e profissionais
portfolio-angular/src/app/projetos	Página que exibe os projetos obtidos pela API
portfolio-angular/src/app/catalogo	Página que exibe as tecnologias obtidas pela API
portfolio-angular/src/app/contat	Página de contato do portfólio
api	Endpoints responsáveis pelo fornecimento dos dados
sql	Scripts utilizados para configuração do banco de dados
🔌 Endpoints utilizados
Endpoint	Método	Função
/api/projetos.php	GET	Retorna os projetos para a tela de Projetos
/api/tecnologias.php	GET	Retorna as tecnologias para a tela de Catálogo

Os dados retornados pela API são utilizados pelos services do Angular e posteriormente exibidos pelos componentes das respectivas páginas.

🚀 Como executar o projeto
API

Com a API configurada, inicie o servidor PHP:

/usr/bin/php -S 0.0.0.0:8000

A API ficará disponível em:

http://localhost:8000
Angular

Entre na pasta do projeto:

cd portfolio-angular

Instale as dependências:

npm install

Execute o servidor Angular:

ng serve

A aplicação ficará disponível em:

http://localhost:4200
📚 Atividade 15 — Área de Gestão do Portfólio
🎯 Autoavaliação

Conceito pretendido: A

A atividade implementa uma área de gestão de projetos integrada à API PHP, utilizando operações CRUD, validação, tratamento de erros HTTP, controle de status, atualização da interface e preparação para diferentes situações de uso.

Além disso, o projeto possui formulário reativo na área de contato, tratamento dos erros retornados pelo backend, estados de envio e recursos de acessibilidade.

📌 Descrição do Projeto

O projeto consiste no desenvolvimento de um portfólio pessoal utilizando Angular, TypeScript, HTML e CSS, integrado a uma API em PHP e a um banco de dados MariaDB.

O sistema permite apresentar informações pessoais, projetos, catálogo de tecnologias e uma área de gestão para cadastrar, editar e excluir projetos.

O projeto também possui um sistema de login para controlar o acesso à área de gestão.

Durante o desenvolvimento foram trabalhados conceitos de:

Angular;
TypeScript;
componentes;
formulários reativos;
validação;
consumo de APIs REST;
operações HTTP;
PHP;
MariaDB;
persistência de dados;
CRUD;
autenticação;
gerenciamento de estado;
tratamento de erros.
💻 Versões utilizadas
Angular CLI       : 21.2.19
Node.js           : 24.14.0
Package Manager   : npm 11.9.0
Operating System  : linux x64
📂 Área de Gestão

A aplicação possui uma área de gestão acessível pela rota:

/gestao

A área permite realizar as principais operações de gerenciamento dos projetos:

cadastrar;
consultar;
editar;
excluir.

As operações são realizadas através da API PHP.

🔌 API de Projetos

O endpoint utilizado para o gerenciamento dos projetos é:

/api/projetos.php

As operações são diferenciadas de acordo com o método HTTP utilizado:

Método	Operação
GET	Consultar projetos
POST	Cadastrar projeto
PUT	Editar projeto
DELETE	Excluir projeto

A API utiliza consultas preparadas por meio de:

prepare()
execute()

Isso permite enviar os valores separadamente da estrutura da consulta SQL.

Justificativa do endpoint único

O mesmo endpoint é utilizado para as quatro operações porque cada ação possui uma finalidade relacionada ao mesmo recurso: projetos.

A diferenciação pelo método HTTP permite manter uma API organizada, utilizando GET, POST, PUT e DELETE de acordo com a operação realizada.

📊 Status dos Projetos

Os projetos possuem status para diferenciar conteúdos publicados daqueles que ainda estão em desenvolvimento.

Os principais estados utilizados são:

rascunho
publicado
arquivado

Na área pública, são apresentados os projetos publicados.

Na área de gestão, os projetos podem ser consultados para fins de administração, incluindo conteúdos que ainda estão em desenvolvimento.

A interface também apresenta o status de cada projeto na listagem.

🔄 Atualização após operações

Após cadastrar ou editar um projeto, a aplicação atualiza a lista sem a necessidade de recarregar manualmente a página.

O método carregar() é executado novamente após a operação para buscar os dados atualizados da API.

Na exclusão, o projeto removido é retirado da lista apresentada na interface.

🔁 Estratégias de atualização

Foram consideradas duas estratégias para atualizar a lista após uma operação:

Recarregar os dados pela API: executar novamente carregar() garante que a interface receba os dados atuais diretamente do banco de dados.

Atualizar somente o array local: altera apenas os dados já presentes no frontend, evitando uma nova requisição, mas exige que o código mantenha corretamente o estado local.

Neste projeto, o recarregamento pela API é utilizado após cadastro e edição para garantir a sincronização com os dados persistidos.

🛡️ Proteção contra envio duplicado

Durante o cadastro ou edição, o estado salvando é utilizado para indicar que uma requisição está em andamento.

O botão de salvar é desabilitado durante esse processo, evitando que um clique duplo provoque duas requisições consecutivas.

Após o término da operação, o estado é atualizado novamente e a interface volta a permitir novas ações.

⚠️ Tratamento de erros

A API possui tratamento para diferentes situações HTTP:

Código	Situação
201	Projeto criado
200	Operação realizada com sucesso
204	Operação concluída sem conteúdo de resposta
400	Requisição inválida
404	Projeto não encontrado
405	Método HTTP não permitido

A aplicação Angular também trata os estados de sucesso e erro para fornecer feedback ao usuário.

🌐 CORS e OPTIONS

A API possui configuração para permitir a comunicação entre o frontend Angular e o backend PHP.

São utilizados os seguintes cabeçalhos:

Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type

A API também trata requisições OPTIONS, utilizadas no processo de CORS.

A resposta para esse método é:

204 No Content

O cabeçalho Access-Control-Allow-Methods informa os métodos HTTP permitidos pelo endpoint.

📬 Formulário de Contato

A página de contato utiliza Reactive Forms do Angular.

O formulário possui os campos:

Nome;
E-mail;
Mensagem.

Cada campo possui validações específicas.

🧩 Formulário reativo

Arquivo:

portfolio-angular/src/app/contat/contat.ts

O formulário é criado utilizando FormBuilder e possui validações com:

Validators.required
Validators.minLength
Validators.email
⚠️ Erros por campo

Arquivo:

portfolio-angular/src/app/contat/contat.html

As mensagens de erro são exibidas quando o campo está inválido e já foi tocado pelo usuário.

Os campos também recebem destaque visual quando estão inválidos.

♿ Acessibilidade

Os campos possuem associação entre <label> e <input>/<textarea> utilizando for e id.

Exemplo:

<label for="nome">Nome</label>

<input
    id="nome"
    type="text"
    formControlName="nome"
>

Isso melhora a identificação dos campos e facilita a utilização do formulário.

📡 Envio do formulário

Arquivo:

portfolio-angular/src/app/contat.service.ts

O service é responsável pela comunicação com a API.

O método enviar() realiza uma requisição POST utilizando HttpClient.

Arquivo:

portfolio-angular/src/app/contat/contat.ts

O componente utiliza subscribe() para tratar os resultados da requisição através dos callbacks next e error.

🔴 Tratamento dos erros do backend

Quando a API retorna uma resposta de erro contendo uma lista de mensagens, o componente utiliza:

err.error?.erros

As mensagens retornadas pelo backend são então apresentadas ao usuário.

Caso a resposta não possua uma lista de erros válida, é apresentada uma mensagem genérica informando que o envio não foi realizado.

⏳ Estado de envio

Durante o envio do formulário, a variável:

enviando

é utilizada para controlar o estado da operação.

Enquanto a requisição está sendo processada, o botão apresenta:

Enviando...

e permanece desabilitado.

Isso evita novos envios enquanto a requisição anterior ainda está em andamento.

✅ Sucesso e limpeza do formulário

Após o envio realizado com sucesso, a aplicação:

apresenta a mensagem retornada pela API;
limpa os campos do formulário;
encerra o estado de envio.

O formulário é limpo através de:

this.form.reset();
🔐 Login

O projeto também possui uma área de login para controlar o acesso à área de gestão.

A autenticação é realizada através da API PHP e utiliza recursos de:

sessão;
verificação de senha;
controle de acesso à área administrativa.

A área de gestão é destinada às operações de administração dos projetos.

🧪 Testes da API
📋 Consultar projetos publicados
curl -i http://localhost:8000/api/projetos.php
📋 Consultar todos os projetos
curl -i "http://localhost:8000/api/projetos.php?todos=1"

A opção todos permite consultar os projetos necessários para a área de gestão, incluindo os que não estão publicados.

🌐 Testar OPTIONS
curl -i -X OPTIONS http://localhost:8000/api/projetos.php

Resposta esperada:

HTTP/1.1 204 No Content
❌ Testar erro 400

O teste envia uma requisição POST sem os dados obrigatórios:

curl -i -X POST http://localhost:8000/api/projetos.php \
-H "Content-Type: application/json" \
-d "{}"

Resultado:

HTTP/1.1 400 Bad Request
❌ Testar erro 404

Para testar um projeto que não existe:

curl -i "http://localhost:8000/api/projetos.php?id=999999"

Resultado:

HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8

{"erro":"Projeto nao encontrado"}
❌ Testar erro 405

Para testar um método HTTP que não é permitido:

curl -i -X PATCH http://localhost:8000/api/projetos.php

Resultado:

HTTP/1.1 405 Method Not Allowed
Content-Type: application/json; charset=utf-8

{"erro":"Metodo nao permitido"}
🗂️ Estrutura geral do projeto
2026-DWII/
│
├── portfolio-angular/
│   └── src/
│       └── app/
│           ├── home/
│           ├── sobre/
│           ├── projetos/
│           ├── contat/
│           ├── catalogo/
│           ├── gestao/
│           └── login/
│
├── api/
│   ├── projetos.php
│   ├── tecnologias.php
│   ├── login.php
│   └── contato.php
│
├── sql/
│   └── setup.sql
│
└── conexao.php
🚀 Tecnologias utilizadas
Tecnologia	Utilização
Angular	Desenvolvimento do frontend
TypeScript	Lógica da aplicação
HTML	Estrutura das páginas
CSS	Estilização e responsividade
Angular Material	Componentes de interface
PHP	Desenvolvimento da API
MariaDB	Banco de dados
REST	Comunicação entre frontend e backend
HTTP	Comunicação e operações da API
📌 Considerações finais

O projeto foi desenvolvido de forma incremental durante as atividades da disciplina de Desenvolvimento Web II.

A aplicação evoluiu de uma estrutura inicial em Angular para um sistema integrado contendo:

Angular;
TypeScript;
HTML;
CSS;
Angular Material;
PHP;
MariaDB;
API REST;
formulários reativos;
validação;
CRUD;
autenticação;
área de gestão;
tratamento de erros;
consumo de dados dinâmicos;
controle de status dos projetos.

O desenvolvimento permitiu integrar conhecimentos de frontend, backend, banco de dados e comunicação entre aplicações, formando uma aplicação web completa.

🔗 Repositório

GitHub — 2026-DWII

https://github.com/CaioZ-Stark/2026-DWII

👨‍💻 Autor

Caio Mario Zachesky Junior

3º ano — Técnico em Informática Integrado ao Ensino Médio

IFPR — Centro de Referência Ponta Grossa

2026

👨‍🏫 Professor

Prof. Dr. João Henrique Berssanette

Disciplina: Desenvolvimento Web II

E-mail: joao.berssanette@ifpr.edu.br

API em Node  (Aula 21)

Uma segunda versão da API, em JavaScript, na pasta `api-node/`.
O contrato de `Get /api/projetos` e o mesmo do `api/projetos.php`
O contrato de `Post /api/login` e o mesmo do `api/login.php`
Como rodar: cd api-node npm install node server.js 
A API sobe em http://localhost:3000. Teste com:

curl -i http://localhost:3000/api/projetos
curl -i http://localhost:3000/api/login