# 🛍️ AA-Sports E-commerce

Este é o repositório do projeto AA-Sports, uma aplicação de e-commerce para artigos esportivos desenvolvida com React. O projeto serve como uma demonstração prática de conceitos fundamentais do ecossistema React, incluindo componentização, gerenciamento de estado e roteamento.

## ✨ Funcionalidades

Atualmente, o projeto conta com as seguintes funcionalidades implementadas:

  * **Listagem de Produtos:** Exibição dos produtos disponíveis na página inicial.
  * **Carrinho de Compras Dinâmico:**
      * Adicionar produtos ao carrinho diretamente da vitrine.
      * Remover produtos na página do carrinho.
      * Cálculo do valor total do pedido em tempo real.
  * **Contador de Itens:** O ícone do carrinho no cabeçalho exibe a quantidade de itens adicionados.
  * **Navegação entre Páginas:** Roteamento implementado para uma experiência de Single Page Application (SPA), permitindo a navegação entre a página inicial e a página do carrinho sem recarregar o navegador.

## 🚀 Tecnologias Utilizadas

  * **[React](https://reactjs.org/):** Biblioteca principal para a construção da interface de usuário.
  * **[React Router DOM](https://reactrouter.com/):** Para a implementação do roteamento e da navegação entre páginas.
  * **Context API:** Utilizada para o gerenciamento de estado global, especificamente para o carrinho de compras.
  * **CSS:** Estilização dos componentes para uma interface limpa e moderna.

## 📁 Estrutura do Projeto

O código-fonte está organizado na pasta `src` com a seguinte estrutura para garantir manutenibilidade e escalabilidade:

```
src/
├── assets/         # Para arquivos estáticos como imagens
├── components/     # Componentes reutilizáveis (Header, ProductCard, etc.)
├── contexts/       # Contextos da aplicação (ex: CartContext)
├── data/           # Dados mockados (ex: lista de produtos)
├── pages/          # Componentes que representam páginas completas (HomePage, CartPage)
├── App.js          # Componente principal que organiza o layout e as rotas
└── index.js        # Ponto de entrada da aplicação
```

## 🏁 Como Executar o Projeto

Para rodar este projeto em seu ambiente local, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/SEU_USUARIO/AA-Sports.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd AA-Sports
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm start
    ```

Após executar o último comando, o site estará disponível para acesso em `http://localhost:3000` no seu navegador.

-----

Espero que goste\! Ele cobre todos os pontos importantes de forma clara e profissional.