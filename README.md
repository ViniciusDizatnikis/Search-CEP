<h1>Projeto de Consulta de CEP</h1>

<p>Desenvolvi um site de consulta de CEPs com o objetivo de aprimorar minhas habilidades em desenvolvimento web e explorar o que eu poderia alcançar com as tecnologias que tenho aprendido. Esse projeto foi um desafio que me permitiu praticar desde a construção da interface do usuário até a integração com APIs externas para obtenção de dados em tempo real.</p>

<h2>Objetivos do Projeto</h2>
<p>O principal objetivo desse site de consulta de CEPs foi criar uma ferramenta funcional e intuitiva, onde o usuário pudesse inserir qualquer CEP válido e receber informações detalhadas sobre aquele código. Mas, além de oferecer essa funcionalidade, o foco era exercitar minhas capacidades de resolver problemas, melhorar a experiência do usuário e aumentar a performance e responsividade do site.</p>

<h2>Funcionalidades Implementadas</h2>
<p>Para atingir esses objetivos, implementei diversas funcionalidades no site:</p>
<ol>
    <li>
        <strong>Busca por CEP:</strong> A funcionalidade principal do site é permitir que o usuário insira um CEP e receba informações detalhadas, como a localidade, o estado, o código IBGE e outros dados relacionados. Essa consulta é feita através de uma integração com uma API de CEP, que me permitiu lidar com requisições e respostas de dados em formato JSON.
    </li>
    <li>
        <strong>Validação de Entrada:</strong> Adicionei uma função para formatar o CEP automaticamente conforme o usuário digita, removendo caracteres não numéricos e inserindo o hífen na posição correta. Essa validação não apenas melhora a experiência do usuário, como também garante que as requisições para a API sejam sempre feitas no formato correto.
    </li>
    <li>
        <strong>Interface Responsiva:</strong> Um dos desafios do projeto foi garantir que a interface funcionasse bem em diferentes tamanhos de tela. Criei um layout responsivo que se ajusta tanto a desktops quanto a dispositivos móveis, utilizando CSS flexbox e media queries.
    </li>
    <li>
        <strong>Sidebar de Navegação:</strong> Implementei um menu lateral que facilita a navegação dentro do site. O menu pode ser aberto e fechado manualmente, e também fiz com que ele se fechasse automaticamente quando a largura da tela excede 1100px, usando o hook <code>useEffect</code> em React para monitorar o redimensionamento da tela. Essa funcionalidade foi interessante para explorar como lidar com eventos globais como o resize e como garantir uma boa usabilidade em diferentes resoluções de tela.
    </li>
    <li>
        <strong>Design e Usabilidade:</strong> Busquei criar uma interface amigável e visualmente agradável. O design é simples, com foco em uma fácil navegação e leitura dos dados. Além disso, as cores, tipografias e espaçamentos foram escolhidos para dar destaque às informações mais importantes, como o resultado da consulta de CEP e os botões de ação.
    </li>
</ol>

<h2>Tecnologias Utilizadas</h2>
<p>Neste projeto, utilizei as seguintes tecnologias:</p>
<ul>
    <li><strong>React:</strong> Como framework principal de desenvolvimento, React foi essencial para a construção dos componentes e a reatividade da aplicação. O uso de hooks como <code>useState</code> e <code>useEffect</code> permitiu controlar o estado da aplicação e responder a eventos de forma eficiente.</li>
    <li><strong>API de CEP:</strong> A integração com a API de consulta de CEPs foi fundamental para a funcionalidade do site. Fiz uso do Axios para fazer as requisições HTTP, o que facilitou bastante o processo de comunicação com a API e o tratamento de erros.</li>
    <li><strong>React Icons:</strong> Para adicionar ícones ao site, utilizei a biblioteca React Icons, que facilita a inclusão de ícones de alta qualidade sem comprometer o desempenho da aplicação. Isso foi utilizado tanto no menu de navegação quanto no botão de busca, proporcionando uma melhor experiência visual.</li>
    <li><strong>CSS Flexbox e Grid:</strong> Para garantir a responsividade do layout, explorei o uso de flexbox e grid, duas das principais ferramentas do CSS moderno. Isso me permitiu posicionar os elementos de forma fluida e garantir que o conteúdo se ajuste bem a diferentes tamanhos de tela.</li>
</ul>

<h2>Desafios Enfrentados</h2>
<p>Durante o desenvolvimento, enfrentei alguns desafios que me ajudaram a crescer como desenvolvedor. Um deles foi lidar com o alinhamento dos elementos no layout, principalmente na exibição dos dados retornados pela API. A formatação do texto, a disposição das informações e a criação de uma interface clara exigiram bastante ajustes e testes.</p>

<p>Outro desafio foi a implementação da lógica para fechar automaticamente o menu lateral com base no tamanho da tela. Tive que aprender a lidar com eventos do navegador e garantir que a experiência do usuário fosse fluida e intuitiva, independente do dispositivo utilizado.</p>

<h2>Oportunidades de Melhoria</h2>
<p>Embora o site esteja funcionando bem, sempre há espaço para melhorias. Algumas das áreas que pretendo explorar futuramente incluem:</p>
<ul>
    <li><strong>Otimização de Performance:</strong> Embora a aplicação seja leve, sempre há espaço para melhorar a performance, especialmente ao carregar e renderizar componentes de forma mais eficiente.</li>
    <li><strong>Adicionar Cache:</strong> Implementar cache local para que as informações de CEP já buscadas fiquem armazenadas e sejam carregadas mais rapidamente em buscas subsequentes.</li>
    <li><strong>Testes Automatizados:</strong> Explorar a implementação de testes automatizados, como testes unitários e de integração, para garantir que o site continue funcionando corretamente à medida que novas funcionalidades forem adicionadas.</li>
</ul>

<h2>Conclusão</h2>
<p>Criar esse site de consulta de CEP foi uma experiência extremamente enriquecedora. Ele me permitiu praticar minhas habilidades técnicas, desde o desenvolvimento de interfaces responsivas até a integração com APIs. Além disso, o projeto me desafiou a pensar em usabilidade, design e performance de uma forma mais abrangente. Fico muito satisfeito com o resultado, mas também estou empolgado com as futuras melhorias que posso implementar.</p>
