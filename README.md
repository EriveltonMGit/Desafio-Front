This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# 1 - Visão Geral do Projeto  
O projeto SEA Tecnologia é uma aplicação web desenvolvida utilizando Next.js para o front-end, oferecendo uma navegação dinâmica e interações baseadas em rotas. Além disso, o projeto utiliza json-server para simular uma API RESTful com dados armazenados em um arquivo db.json.
A aplicação permite o gerenciamento de dados de uma empresa, incluindo funcionalidades como:

Sobre a Empresa
Adicionar Funcionário
Notificações
E outros recursos voltados para o gerenciamento de informações.  
&nbsp;<a href="https://desafio-front-sea-tecnologia.netlify.app/Pages/Funcionarios">
Projeto hospedado no netfly 
</a>&nbsp;

# 2 - Pré-requisitos  
Antes de começar, você precisará instalar as seguintes ferramentas:

#### Node.js (Versão recomendada: v16 ou superior)
#### npm (O gerenciador de pacotes do Node.js)  

# 3 - Instalação
#### Passo 1: Clonando o Repositório, clone o repositório do projeto no seu ambiente local:
git clone https://github.com/EriveltonMGit/Desafio-Front.git

#### Passo 2: Instalando as Dependências  
```bash
npm install
```

#### Passo 3: Instalando Dependências de Desenvolvimento


```bash
npm install --save-dev concurrently json-server
```

# 4 - Scripts e Comandos - IMPORTANTE!!  
O arquivo package.json contém os seguintes scripts:
npm run dev: Inicia tanto o servidor Next.js quanto o json-server ao mesmo tempo para o desenvolvimento local.
O servidor Next.js ficará disponível em http://localhost:3000.
O servidor json-server ficará disponível em http://localhost:3001 (esse endereço pode ser alterado no script dev:json-server).
```bash
npm run dev
```

# 5 - Dependências  
O projeto depende de várias bibliotecas para funcionar corretamente. As principais dependências são:

#### Next.js: Framework React para construção de páginas dinâmicas.
#### react e react-dom: Bibliotecas principais para a construção de interfaces no React.
#### json-server: Simula um servidor RESTful para APIs utilizando um arquivo db.json.
#### axios: Biblioteca para fazer requisições HTTP.
#### antd: Biblioteca de componentes UI para construção de interfaces interativas.

## Essa documentação detalha os passos necessários para rodar, desenvolver e preparar o seu projeto SEA Tecnologia para produção. Caso tenha dúvidas adicionais, não hesite em pedir mais informações!

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# Page 1 - Home
![Descrição da Imagem](https://github.com/EriveltonMGit/Codigo_certo/raw/main/src/assets/capa.png)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


