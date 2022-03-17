import React,{useState} from 'react';
import './App.css';
import Axios from "axios";


function App() {

  const [values, setValues] = useState();

  const handleChangeValues = (value) =>{
    setValues((prevValue)=>({
      //Arrow Function, é tipo uma função, so que rápida.
      ...prevValue,
      [value.target.name]: value.target.value,
  }));
}

  const handleClickButton = () =>{
    Axios.post("http://localhost:3001/login",{
      email: values.email,
      senha: values.senha,
    }).then((response)=>{
      console.log(response);
    })
  }

  //sim
  return (
    <div className="App">
    <h1 className="text-3xl font-bold underline">
      top 10 coisas de login
    </h1>
    <br></br>
    <form name="login" className="w-full max-w-sm mx-auto">
    <div>
    <input type="hidden" name="id"/>
    </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="placeholder--center block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        E-mail
      </label>
    </div>

    <div className="md:w-2/3">
      <input

      className="placeholder--center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name"
      type="email"
      minLength="10"
      placeholder="E-mail"
      name="email"
      onChange={handleChangeValues}
      />
    </div>

  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
      className="placeholder--center
      block text-gray-500
      font-bold md:text-right mb-1 md:mb-0 pr-4"
      htmlFor="inline-password">
        Senha
      </label>
    </div>

    <div className="md:w-2/3">
      <input 
      className="placeholder--center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password"
      type="password"
      name="senha"
      placeholder="Password"
      onChange={handleChangeValues}  
      />
    </div>

  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3"></div>
    <label className="md:w-2/3 block text-gray-500 font-bold">
      <input
      className="mr-2 leading-tight"
      type="checkbox"
      />
      <span className="text-sm">
        Lembrar-me
      </span>
    </label>
  </div>
  <div className=" md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button 
      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      onClick = {() => handleClickButton()}
      type="button"
      >
        Logar
      </button>
    </div>
  </div>
</form>


    </div>
  );
}

export default App;
