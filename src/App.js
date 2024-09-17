import { FaSearch } from "react-icons/fa";
import './style.css'; 
import { useState } from "react";
import api from "./api";



function App() {
  const[input, setinput] = useState('')
  const[cep, setCep] = useState({})

  async function handle() {


    if (input === ''){
      alert("Digite algum cep")
      return;
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      console.log(response.data)
      setinput('')
    }catch(erro){
      setinput("")
      alert('erro na procura')
    }
  }
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input type="text"  placeholder="Digite seu CEP..." value={input} onChange={(e)=>setinput(e.target.value)}></input>
        <button onClick={handle}><FaSearch /></button>
      </div>

      {Object.keys(cep).length > 0 && (<main className="main">
        <h2>CEP: {cep.cep}</h2>
        <span>DDD: {cep.ddd}</span>
        <span>Estado: {cep.estado}</span>
        <span>Localidade: {cep.localidade}</span>
        <span>Região: {cep.regiao}</span>
        
      </main>)}
    </div>
    

  );
}

export default App;
