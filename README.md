## 🎯 Autoavaliação

**Conceito pretendido: A**

**Justificativa (cite o arquivo/linha de cada critério):**

- **Form reativo + erro por campo:**  
  `portfolio-angular/src/app/contat/contat.ts` — formulário criado com `FormBuilder` e validações utilizando `Validators.required`, `Validators.minLength` e `Validators.email`.  
  `portfolio-angular/src/app/contat/contat.html` — mensagens de erro exibidas somente quando o campo está `invalid` e `touched`.

- **POST via service + tratamento:**  
  `portfolio-angular/src/app/contat.service.ts` — método `enviar()` realiza o POST utilizando `http.post()`.  
  `portfolio-angular/src/app/contat/contat.ts` — `subscribe()` possui os callbacks `next` e `error` para tratamento do resultado.

- **Endpoint PHP:**  
  `api/contato.php` — recebe os dados através de `php://input`, realiza a validação, utiliza `PDO->prepare()` e `execute()` para inserir os dados e retorna `400` para erros e `201` para sucesso.

- **Estados/robustez/UX (DUA):**  
  `portfolio-angular/src/app/contat/contat.html` — utiliza `<label>` associado aos campos através de `for`/`id`, apresenta mensagens textuais de erro e controla o botão durante o envio.  
  `portfolio-angular/src/app/contat/contat.css` — destaca visualmente os campos inválidos e tocados.  
  `portfolio-angular/src/app/contat/contat.ts` — utiliza o estado `enviando` para controlar o envio e libera o botão após sucesso ou erro.

- **Aproveitamento dos erros vindos do backend:**  
  `portfolio-angular/src/app/contat/contat.ts` — o callback `error` recebe um `HttpErrorResponse` e utiliza `err.error?.erros` para exibir as mensagens retornadas pela API.

- **Sucesso e limpeza do formulário:**  
  `portfolio-angular/src/app/contat/contat.ts` — no callback `next`, exibe a mensagem de sucesso, executa `form.reset()` e encerra o estado `enviando`.

- **Autoavaliação:**  
  Esta seção do `README.md` apresenta o conceito pretendido e justifica cada critério indicando os arquivos responsáveis pela implementação.