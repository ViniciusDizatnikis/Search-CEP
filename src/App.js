import { FaBars, FaSearch, FaInstagram, FaLinkedin, FaGithub, FaTimes, FaReact } from "react-icons/fa";
import './style.css';
import { useState, useRef, useEffect } from "react";
import api from "./api";
import mapacep from './img/composicao-cep-correios-01-768x468.png.webp';
import imgCep from './img/significado-numeros-cep.webp';
import logo from './img/Logo.png';

function App() {
  const [cepInvalido, setCepInvalido] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  const [loading, setLoading] = useState(false);
  const [isCepLoaded, setIsCepLoaded] = useState(false);
  const parte2Ref = useRef(null);
  const buscar = useRef(null);
  const oqRef = useRef(null);
  const sigCep = useRef(null);
  const sobre = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setSidebar(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);
  const handleReloadPage = () => window.location.reload();

  const formatCep = (value) => {
    value = value.replace(/\D/g, '');

    if (value.length > 8) {
      value = value.slice(0, 7);
    }

    if (value.length === 8) {
      value = value.slice(0, 5) + '-' + value.slice(5);
    }

    return value;
  };

  const rolagem = (destino) => {
    if (destino.current) {
      destino.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleChange = (e) => {
    const formattedValue = formatCep(e.target.value);
    setInput(formattedValue);
  };

  const handleSearch = async () => {
    if (input === null) {
      setCepInvalido(false);
      return;
    }

    try {
      setLoading(true);
      const rawInput = input.replace('-', '');
      const response = await api.get(`${rawInput}/json`);
      setCep(response.data);
      setInput('');
      setIsCepLoaded(true);

      if (response.data.cep) {
        setCepInvalido(false);
        rolagem(parte2Ref);
      } else {
        setCepInvalido(true);
      }
    } catch (error) {
      setCepInvalido(true);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <div className="cabecalho">
        <div className="LogoC" onClick={handleReloadPage}>
          <img src={logo} alt="Logo" />
          <h1>Search CEP</h1>
        </div>
        <div className="menu">
          {!sidebar ? (
            <FaBars onClick={showSidebar} className="menu-icon" />
          ) : (
            ""
          )}
          <div className={`sidebar ${sidebar ? 'active' : ''}`}>
            <ul>
              <FaTimes onClick={closeSidebar} className="fechar" />
              <li><a onClick={() => { rolagem(buscar); closeSidebar(); }}>Buscar</a></li>
              <li><a onClick={() => { rolagem(oqRef); closeSidebar(); }}>O que é um CEP?</a></li>
              <li><a onClick={() => { rolagem(sigCep); closeSidebar(); }}>O que significa o CEP?</a></li>
              <li><a onClick={() => { rolagem(sobre); closeSidebar(); }}>Sobre</a></li>
              {sidebar && <li className="react">Criado com <FaReact /></li>}
            </ul>
          </div>
          {sidebar && <div className="sairmenu" onClick={closeSidebar}></div>}
        </div>
      </div>

      <div className="containerInput" ref={buscar}>
        <input
          type="text"
          placeholder="Digite seu CEP..."
          maxLength={9}
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <button onClick={handleSearch} disabled={loading}>
          <FaSearch />
        </button>
      </div>

      <div className="parte2" ref={parte2Ref}>
        <main className="main">
          {isCepLoaded ? (
            <>
              {cepInvalido ? (
                <span>CEP inválido</span>
              ) : (
                <>
                  <h1>Dados sobre o CEP: {cep.cep}</h1>
                  <div className="info">
                    <div className="ladoEsquerdo">
                      <span><strong>DDD:</strong> {cep.ddd}</span>
                      <span><strong>Estado:</strong> {cep.uf}</span>
                      <span><strong>IBGE:</strong> {cep.ibge}</span>
                    </div>
                    <div className="ladoDireito">
                      <span><strong>Localidade:</strong> {cep.bairro || cep.localidade}</span>
                      <span><strong>Região:</strong> {cep.regiao}</span>
                      <span><strong>SIAFI:</strong> {cep.siafi}</span>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            !loading && <span>Digite o CEP e clique em buscar.</span>
          )}
        </main>
      </div>

      <div className="parte3">
        <div className="oqueDiv" ref={oqRef}>
          <h1>O que é um CEP?</h1>
          <p>
            O Código de Endereçamento Postal (CEP) é um sistema numérico dos Correios do Brasil, composto por oito
            dígitos que organizam endereços e facilitam a entrega de correspondências. Os primeiros dígitos indicam
            regiões ou estados, enquanto os subsequentes detalham áreas específicas. Esse sistema otimiza o processo
            de entrega, reduzindo extravios e atrasos, e é essencial em serviços online, onde a precisão do endereço
            é crucial. Compreender o CEP é importante para garantir que as informações de entrega sejam corretas e
            atualizadas.
          </p>
          <img src={mapacep} alt="Mapa do CEP" />
        </div>
      </div>

      <div className="parte4">
        <div className="sigCep" ref={sigCep}>
          <h1>O que significa cada código do CEP</h1>
          <h2>Os números dos CEP's não são aleatórios, cada número do CEP {cep.cep} tem um significado e uma função
            para a localização de um endereço.</h2>
          <h3>1º Dígito: região postal</h3>
          <h3>2º Dígito: sub-região postal</h3>
          <h3>3º Dígito: setor postal</h3>
          <h3>4º Dígito: subsetor postal</h3>
          <h3>5º Dígito: divisor de subsetor postal</h3>
          <h3>6º, 7º e 8º Dígitos: identificadores de distribuição (também conhecidos como sufixo)</h3>
          <img src={imgCep} alt="Significado dos números do CEP" />
        </div>
      </div>

      <div className="parte5">
        <div className="informacoes" ref={sobre}>
          <h1>SEARCH CEP</h1>
          <h2>SEARCH CEP é uma ferramenta prática e eficiente, onde você pode inserir qualquer CEP
            válido para obter todas as informações detalhadas associadas a ele, como logradouro, bairro,
            cidade, estado, entre outros dados relevantes.
            Importante: o serviço é exclusivo para consulta de CEP. Certifique-se de inserir apenas o CEP correto para garantir uma consulta precisa.
          </h2>
        </div>
        <div className="Logo">
          <img src={logo} alt="Logo" />
          <h1>SEARCH CEP</h1>
        </div>
      </div>

      <footer>
        <ul>
          <li><a href="https://www.instagram.com/vinix_dz/"><FaInstagram /></a></li>
          <li><a href="https://www.linkedin.com/in/vinicius-dizatnikis-80307a30a/"><FaLinkedin /></a></li>
          <li><a href="https://github.com/ViniciusDizatnikis"><FaGithub /></a></li>
        </ul>
        <p>&copy; 2024 Vinicius Dizatnikis. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
