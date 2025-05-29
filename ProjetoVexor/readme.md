<div align="center">
  <h1>🖱️ Projeto Vexor</h1>
  <p>
    <strong>E-commerce de Mouses</strong> <br>
    <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue?style=flat-square">
    <img src="https://img.shields.io/badge/Stack-HTML%2FCSS%2FJS-yellow?style=flat-square">
    <img src="https://img.shields.io/badge/License-Free-lightgrey?style=flat-square">
  </p>
</div>

---

## 📚 Visão Geral

O **Vexor** é um e-commerce de mouses, pensado para ser fácil de estudar, entender, e modificar.
O projeto é 100% front-end (HTML, CSS, JS), simula um banco de dados local com JSON e tem navegação modularizada por páginas e scripts.

---

## 🗂️ Estrutura e Detalhamento dos Arquivos

### 📄 Páginas HTML

- **index.html**  
  > Home do site. Exibe banners promocionais, destaques e atalhos para navegação rápida. Carrega scripts para exibir promoções e listar os produtos mais populares.

- **product.html**  
  > Listagem de todos os produtos disponíveis no site. Usa JS para puxar os dados do banco e renderizar cards de produto com filtros, busca e opção de favoritar/adicionar ao carrinho.

- **product-page.html**  
  > Página de detalhes do produto. Mostra descrição completa, imagens, avaliações, botão de adicionar ao carrinho e favoritos, e sugere produtos similares.

- **cart.html**  
  > Mostra os produtos que o usuário colocou no carrinho. Permite ajustar quantidade, remover item e ver o total da compra. Simula checkout.

- **favorite.html**  
  > Lista todos os produtos marcados como favorito pelo usuário logado. Permite acessar rapidamente as páginas desses produtos.

- **login.html**  
  > Tela de login, com validação de dados. Integra com o sistema de autenticação simulado via JS/JSON.

- **register.html**  
  > Cadastro de novo usuário. Tem validação de campos, confirmação de senha, checagem de usuário duplicado e integração com o "banco de usuários".

- **usuario.html**  
  > Painel do usuário autenticado. Mostra dados pessoais, histórico de favoritos, pedidos e permite editar informações ou sair da conta.

- **contact.html**  
  > Formulário para contato com o suporte/loja. Os dados são apenas simulados, mas mostra feedback visual para o usuário.

- **config.html**  
  > Página de configurações do usuário: acessibilidade, preferências de visualização, entre outras opções que podem ser expandidas.

- **tracking.html**  
  > Tela de rastreamento de pedidos. O usuário pode inserir um código (simulado) para acompanhar o status da compra.

- **delivery-policy.html**  
  > Exibe as regras e políticas de entrega, simulação de frete, prazos e perguntas frequentes.

- **policy-privacy.html**  
  > Texto da política de privacidade, explicando como os dados dos usuários são tratados (simulado, já que não há backend real).

- **base-page.html**  
  > Modelo/template para padronizar novas páginas, contendo a estrutura básica comum a todas.

---

### 🎨 CSS (`/css`)

Cada página tem seu CSS dedicado para facilitar manutenção, reuso, e customização.  
Tudo organizado em px, estilo mobile-first e com media queries.

- **styles.css**  
  > Estilo global: cores principais, fontes, resets, variáveis CSS, componentes reutilizáveis (botões, inputs, cards).

- **auth.css**  
  > Customiza visual das telas de login e cadastro: animações, feedback de erro/sucesso, responsividade para formulários.

- **cart.css**  
  > Estilos do carrinho: listas, totais, botões de ação, tabelas de preços.

- **contact.css**  
  > Layout do formulário de contato, feedbacks visuais, disposição dos campos.

- **favorite.css**  
  > Customização visual da tela de favoritos (ex: coração cheio/vazio, grid/lista, badges).

- **index.css**  
  > Home do site: banners, destaques, animações de entrada, responsividade.

- **mouse.css**  
  > Específico para a página histórica ou de curiosidades dos mouses. Pode conter timeline, cards com história, imagens clássicas.

- **policy.css**  
  > Formatação de textos longos e listas nas páginas de política (privacidade, entrega).

- **product.css**  
  > Estilização da listagem de produtos: cards, grid, filtros, tooltips.

- **product-page.css**  
  > Visual dos detalhes do produto: galeria de imagens, descrição, avaliações, preço.

- **promotion.css**  
  > Banners animados, destaque para promoções e ofertas relâmpago.

- **users.css**  
  > Painel de usuário: abas, avatar, histórico, listas de pedidos, responsividade para mobile.

---

### ⚡ JavaScript (`/js`)

Scripts modulares, cada um cuidando de uma responsabilidade.  
Sempre que possível, os arquivos se comunicam por meio de funções simples e acesso ao localStorage/json.

- **accessibility.js**  
  > Habilita recursos de acessibilidade como alto contraste, ajuste de tamanho de fonte, atalhos via teclado, foco em elementos, salvando preferências do usuário.

- **cart.js**  
  > Toda a lógica de adicionar/remover itens do carrinho, atualizar totais em tempo real, interagir com a tela de checkout e armazenar as escolhas no localStorage.

- **favorite.js**  
  > Permite marcar/desmarcar produtos como favorito, atualizar ícones em tempo real e salvar essa informação para cada usuário logado.

- **footer.js**  
  > Monta o rodapé do site dinamicamente, atualizando informações como ano, links de políticas, e inserindo ícones sociais.

- **index.js**  
  > Scripts da home: carrossel de banners, animações de entrada, exibição dos produtos em destaque, countdowns de promoções.

- **login.js**  
  > Validação de campos, integração com o "banco de usuários", gerenciamento de sessão (simulado com localStorage).

- **login-redirect.js**  
  > Protege páginas que só podem ser acessadas por usuários logados, redirecionando automaticamente se não houver sessão ativa.

- **mouse.js**  
  > Exibe curiosidades, história dos mouses, interatividade para timeline/histórico. Pode trazer dados de arquivos ou API futuramente.

- **navbar.js**  
  > Cria e atualiza a barra de navegação do site, incluindo menu hambúrguer (mobile), badges de carrinho/favorito, e lógica de usuário logado/deslogado.

- **product.js**  
  > Busca, filtra, ordena e exibe produtos usando dados do `products-database.json`. Suporta busca por nome, categoria, e filtros dinâmicos.

- **product-page.js**  
  > Gerencia interatividade dentro da página de detalhe do produto: trocar imagens, selecionar variação, avaliações, adicionar ao carrinho/favoritos.

- **promotion.js**  
  > Gerencia banners promocionais, ativa/desativa ofertas e atualiza o layout com base em datas ou triggers.

- **register.js**  
  > Cadastro de usuário: validação de campos, senha forte, checagem de e-mail/usuário duplicado, integração com o "banco de usuários", animações de feedback.

- **search.js**  
  > Implementa a barra de busca do site, inclusive sugestões automáticas, autocomplete e integração com a listagem de produtos.

- **tracking.js**  
  > Simula o rastreamento de pedidos: gera status aleatório, timeline de entrega, feedback visual para o usuário.

- **user-panel.js**  
  > Toda a lógica da página do usuário: editar dados, visualizar histórico, interagir com favoritos, sair da conta.

---

### 🗄️ Banco de Dados Local (`/db`)

- **products-database.json**  
  > Lista completa dos mouses disponíveis. Cada item tem campos como: id, nome, marca, specs, preço, imagem, categoria e descrição.

- **users-database.json**  
  > Cadastro de todos os usuários (simulado): username, senha (hash ou texto puro), favoritos, histórico de compras e configurações.

### 📃 Documentação & Regras

- **Regras de Criação do Site/Relatório Tags HTML.docx**  
  > Documento detalhando convenções de código, padrões de tag HTML e um mini-relatório para referência ou apresentação acadêmica.

---

## 🔄 Fluxo de Uso (Resumo)

1. **index.html** → Descubra produtos e promoções.
2. **register.html/login.html** → Crie sua conta e faça login.
3. **product.html** → Navegue e filtre todos os mouses.
4. **product-page.html** → Veja detalhes, avaliações, imagens, compre ou favorite.
5. **cart.html/favorite.html** → Gerencie seus favoritos e finalize sua compra.
6. **usuario.html** → Acesse dados, histórico, e configurações.
7. **Acessibilidade** sempre disponível pelo menu superior.
