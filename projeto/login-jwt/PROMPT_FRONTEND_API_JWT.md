# Prompt: aprender a criar um frontend para uma API de login com JWT

Copie o texto abaixo e cole-o numa nova conversa com o ChatGPT. Se possível, anexe também os ficheiros do backend.

---

## Prompt para o ChatGPT

Quero que sejas meu mentor de desenvolvimento frontend. Ajuda-me a criar, passo a passo, um frontend para a API de autenticação descrita abaixo. O meu objetivo é construir a aplicação e, ao mesmo tempo, aprender como um frontend consome uma API REST e usa um token JWT.

### Como quero aprender

- Explica em português claro, com exemplos pequenos e adequados a quem está a aprender.
- Trabalha por etapas: explica o objetivo, indica os ficheiros a criar ou alterar, mostra o código e explica as partes importantes.
- A stack já está decidida: usa **HTML, CSS e JavaScript puro (vanilla JS)**, sem frameworks ou bibliotecas de interface. Não perguntes qual stack prefiro nem proponhas React como alternativa, a menos que eu peça.
- Não despejes a aplicação inteira de uma vez. Confirma o meu nível de experiência e começa pela primeira etapa, avançando gradualmente.
- Organiza o frontend como um projeto real, com responsabilidades separadas e estrutura clara de pastas e ficheiros (por exemplo, páginas, estilos, módulos JavaScript, serviços para chamadas à API e utilitários, conforme fizer sentido). Não concentres toda a aplicação num único HTML ou ficheiro JavaScript. Explica a finalidade de cada parte e evita abstrações prematuras.
- Depois de cada etapa, dá-me uma tarefa curta para eu tentar e pede-me que partilhe o resultado ou os erros antes de avançarmos. Se eu pedir explicitamente o projeto completo, podes mostrá-lo, mas explica como o dividir e estudar.
- Quando eu partilhar um erro, ajuda-me a investigar a causa e a ler a mensagem, em vez de apenas substituir o código.
- Usa nomes de variáveis e comentários consistentes e evita dependências desnecessárias.

### Backend existente

- Tecnologias: Node.js, Express, MySQL, `mysql2`, `bcryptjs` e `jsonwebtoken`.
- A API corre em `http://localhost:3000`.
- O middleware JSON está ativo e o CORS permite atualmente a origem `http://127.0.0.1:5500`.
- A base de dados é MySQL. A tabela `users` tem `id`, `name`, `email`, `password` (hash) e `created_at`.
- O backend lê configuração da base de dados e o segredo JWT de variáveis de ambiente. Não peças para colocar segredos no frontend.

### Endpoints e contrato da API

#### Verificar se a API está ativa

`GET http://localhost:3000/`

Resposta esperada:

```json
{ "message": "API funcionando!" }
```

#### Criar conta

`POST http://localhost:3000/api/auth/register`

Cabeçalho: `Content-Type: application/json`

Corpo:

```json
{
  "name": "Nome da pessoa",
  "email": "pessoa@example.com",
  "password": "senha com pelo menos 8 caracteres"
}
```

Sucesso: HTTP `201`, com uma mensagem de confirmação. Erros relevantes: `400` para campos em falta ou senha com menos de 8 caracteres; `409` se o email já estiver registado; `500` para erro interno.

#### Iniciar sessão

`POST http://localhost:3000/api/auth/login`

Cabeçalho: `Content-Type: application/json`

Corpo:

```json
{
  "email": "pessoa@example.com",
  "password": "a senha"
}
```

Sucesso: HTTP `200`, com esta forma aproximada:

```json
{
  "message": "Login efetuado com sucesso!",
  "token": "JWT devolvido pela API",
  "user": {
    "id": 1,
    "name": "Nome da pessoa",
    "email": "pessoa@example.com"
  }
}
```

Credenciais em falta resultam em `400`; credenciais incorretas resultam em `401`; erros internos resultam em `500`.

#### Obter perfil autenticado

`GET http://localhost:3000/api/auth/profile`

Enviar o token no cabeçalho:

```http
Authorization: Bearer <token>
```

Sucesso: HTTP `200`, com uma mensagem e `user` contendo os dados codificados no token (atualmente `id` e `email`). Sem token, ou com token inválido/expirado, a API responde `401`.

O token é assinado pelo backend e tem validade definida por `JWT_EXPIRES_IN`, com padrão de `1h`. O frontend não deve confiar apenas em dados do token para autorizar ações: deve chamar o endpoint protegido e tratar a resposta da API.

### O que pretendo construir

Uma interface simples, acessível e organizada como um projeto real, usando apenas HTML, CSS e JavaScript puro, com:

1. Formulário de registo com nome, email e senha.
2. Formulário de login.
3. Mensagens claras de carregamento, sucesso e erro, incluindo os erros HTTP devolvidos pela API.
4. Uma área de perfil que chama `/profile` com o token e mostra os dados recebidos.
5. Uma forma de terminar sessão e limpar o estado de autenticação.
6. Validação básica no frontend, deixando claro que a validação definitiva também pertence ao servidor.

Ensina-me o fluxo completo: enviar JSON com `fetch` (ou a ferramenta apropriada à stack escolhida), interpretar respostas e códigos HTTP, guardar temporariamente o token, anexá-lo às chamadas protegidas, detetar token expirado/inválido e atualizar a interface conforme o estado de autenticação.

### Segurança e decisões a explicar

- Explica os riscos de guardar tokens em `localStorage` ou `sessionStorage` e apresenta opções com as respetivas vantagens e limites. Para um exercício de aprendizagem, podes demonstrar uma opção simples, mas assinala que não é automaticamente a melhor escolha para produção.
- Explica, em termos práticos, como XSS pode expor tokens e como cookies `HttpOnly`, `Secure` e `SameSite` podem mudar a abordagem — lembrando que usar cookies pode exigir alterações no backend e proteção contra CSRF.
- Nunca coloques o segredo JWT, credenciais da base de dados ou ficheiros `.env` no frontend ou no repositório público.
- Explica que CORS é configurado no servidor e que a origem do frontend tem de coincidir com a origem permitida. Se usarmos uma origem diferente de `http://127.0.0.1:5500`, indica a alteração necessária no backend; não apresentes CORS como autenticação.
- Usa HTTPS em produção e não mostres nem registes senhas ou tokens nas mensagens da interface ou na consola.
- Não inventes endpoints nem campos. Se descobrires que o frontend precisa de uma capacidade que a API não oferece, explica a limitação e propõe a alteração mínima necessária ao backend antes de depender dela.

### Organização sugerida das aulas

Guia-me nesta ordem, mantendo HTML, CSS e JavaScript puro:

1. Confirmar a stack, verificar como iniciar o backend e testar a API.
2. Criar a estrutura mínima do frontend e uma página funcional.
3. Construir e validar o formulário de registo.
4. Enviar o pedido de registo e tratar as respostas.
5. Construir o login e compreender o objeto JSON recebido.
6. Gerir o estado de autenticação e decidir como manter o token durante o exercício.
7. Fazer o pedido autenticado ao perfil com `Authorization: Bearer ...`.
8. Tratar erros `401`, expiração do token e logout.
9. Melhorar acessibilidade, organização do código e aparência.
10. Rever o fluxo no navegador e explicar como preparar a aplicação para produção.

Começa por resumir o que entendeste, confirma brevemente a minha experiência e inicia apenas a primeira etapa: definir a estrutura de pastas e ficheiros do frontend e explicar como a aplicação será servida localmente. Não perguntes qual stack prefiro. Não avances para a etapa seguinte sem eu compreender a atual, salvo se eu pedir para acelerar.

---
