<h1>Projeto de Consulta de CEP</h1>

<p>Desenvolvi um site para consultar CEPs com o objetivo de melhorar minhas habilidades em desenvolvimento web e ver do que sou capaz com as tecnologias que estou aprendendo. Esse projeto foi um grande desafio e me ajudou a praticar desde a criação da interface até a integração com APIs para conseguir dados em tempo real.</p>

<img src="src/img/Logo.png">

<h1>SEARCH CEP</h1>

<h2>Objetivos do Projeto</h2>
<p>O principal objetivo desse site era criar uma ferramenta prática e fácil de usar, onde qualquer pessoa pudesse digitar um CEP e receber informações detalhadas. Além de oferecer essa funcionalidade, quis exercitar minhas habilidades em resolver problemas, melhorar a experiência do usuário e deixar o site mais rápido e responsivo.</p>

<h2>Funcionalidades Implementadas</h2>
<p>Para alcançar tudo isso, implementei algumas funcionalidades legais no site:</p>
<ol>
    <li>
        <strong>Busca por CEP:</strong> A principal função é permitir que o usuário insira um CEP e veja informações como localidade, estado, código IBGE e mais. Essa consulta é feita com uma API de CEP, que me deixou lidar com requisições e respostas em JSON.
    </li>
    <li>
        <strong>Validação de Entrada:</strong> Criei uma função que formata o CEP automaticamente enquanto o usuário digita, removendo caracteres que não são números e colocando o hífen no lugar certo. Isso melhora a experiência e garante que as requisições para a API sempre estejam corretas.
    </li>
    <li>
        <strong>Interface Responsiva:</strong> Um desafio foi garantir que a interface funcionasse bem em diferentes tamanhos de tela. Criei um layout responsivo que se adapta tanto em desktops quanto em dispositivos móveis, usando CSS flexbox e media queries.
    </li>
    <li>
        <strong>Sidebar de Navegação:</strong> Implementei um menu lateral que facilita a navegação no site. O menu pode ser aberto e fechado manualmente e se fecha automaticamente quando a tela fica maior que 1100px. Usei o hook <code>useEffect</code> em React para monitorar o redimensionamento da tela, o que foi legal para aprender a lidar com eventos globais.
    </li>
    <li>
        <strong>Design e Usabilidade:</strong> Busquei criar uma interface amigável e agradável aos olhos. O design é simples, focando na facilidade de navegação e leitura dos dados. Escolhi cores, fontes e espaçamentos que destacam as informações mais importantes, como o resultado da consulta de CEP e os botões de ação.
    </li>
</ol>

<h2>Tecnologias Utilizadas</h2>
<p>Neste projeto, usei algumas tecnologias bacanas:</p>
<ul>
    <li><strong>React:</strong> Como meu framework principal, React foi essencial para construir os componentes e deixar a aplicação reativa. Usei hooks como <code>useState</code> e <code>useEffect</code> para controlar o estado da aplicação e responder a eventos de forma eficiente.</li>
    <li><strong>API de CEP:</strong> A integração com a API de consulta de CEPs foi fundamental. Usei o Axios para fazer as requisições HTTP, o que facilitou a comunicação com a API e o tratamento de erros.</li>
    <li><strong>React Icons:</strong> Para adicionar ícones ao site, usei a biblioteca React Icons, que facilita a inclusão de ícones de alta qualidade sem afetar o desempenho. Isso melhorou a aparência do menu de navegação e do botão de busca.</li>
    <li><strong>CSS Flexbox e Grid:</strong> Para garantir que o layout fosse responsivo, explorei o uso de flexbox e grid, ferramentas incríveis do CSS moderno que me ajudaram a posicionar os elementos de forma fluida.</li>
</ul>

<h2>Desafios Enfrentados</h2>
<p>Durante o desenvolvimento, enfrentei alguns desafios que me ajudaram a crescer como desenvolvedor. Um deles foi ajustar o alinhamento dos elementos no layout, principalmente ao exibir os dados da API. A formatação do texto e a disposição das informações exigiram muitos ajustes e testes.</p>

<p>Outro desafio foi implementar a lógica para fechar automaticamente o menu lateral dependendo do tamanho da tela. Aprendi a lidar com eventos do navegador e garantir que a experiência do usuário fosse tranquila, independentemente do dispositivo.</p>

<h2>Oportunidades de Melhoria</h2>
<p>Embora o site esteja funcionando bem, sempre há espaço para melhorias. Algumas áreas que quero explorar futuramente incluem:</p>
<ul>
    <li><strong>Otimização de Performance:</strong> A aplicação é leve, mas sempre dá para melhorar a performance, especialmente ao carregar e renderizar componentes de forma mais eficiente.</li>
    <li><strong>Adicionar Cache:</strong> Implementar cache local para que as informações de CEP já buscadas fiquem armazenadas e carreguem mais rapidamente nas próximas buscas.</li>
    <li><strong>Testes Automatizados:</strong> Quero explorar a implementação de testes automatizados, como testes unitários e de integração, para garantir que o site continue funcionando corretamente à medida que novas funcionalidades forem adicionadas.</li>
</ul>

<h2>Conclusão</h2>
<p>Criar esse site de consulta de CEP foi uma experiência incrível. Ele me permitiu praticar minhas habilidades técnicas, desde o desenvolvimento de interfaces responsivas até a integração com APIs. Além disso, o projeto me desafiou a pensar em usabilidade, design e performance de uma maneira mais completa. Estou muito satisfeito com o resultado e animado para as melhorias que posso fazer no futuro!</p>
