// Importando os componentes
import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInpunt";

import "./styles/global.css";
import "./styles/theme.css";
import { Cycles } from "./components/Cycles";

// Aqui estamos importando minha function direto
export function App() {
  console.log("Teste");
  // Retorna apenas um elemento JSX, por isso utilizo dentro de uma div ou <></>
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>

      {/* 
      FAZ A MESMA COISA QUE O CÓDIGO ACIMA
      <div className="container">
        <div className="content">
          <section>Logo</section>
        </div>
      </div> 
      */}

      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>

      <Container> 
        <form className="form">
          <div className="formRow">
            <DefaultInput labelText="Texto" id="meuInput" type="text" placeholder="Digite Algo" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

// export { App }; || export default App;
