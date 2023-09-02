import './App.css'
import Botao from './form/Botao.jsx'
import Input from './form/Input.jsx'

export default function App() {
  return (
    <main class="caixa">
      <h1>Formulario de cadastro</h1>
      <form action="#" class="formulario">
          <Input id={"nome"} place="Ensira seu nome"/> 
          <Input id={"rua"} place="Ensira sua rua"/>
          <Input id={"email"} place="Ensira email"/>
          <Input id={"senha"} type="password" place="Ensira senha"/>
          <Input id={"senha"} type={"password"} place={"confirmar senha"}/>
      <div class="botoes">
        <Botao nome="Cadastrar"/>
         <Botao nome="Enviar" type="submit"/>
      </div>
      </form>
    </main>
  )
}
