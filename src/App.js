import './App.css';

function App() {
  return (
    <body>
      <main>
        <div className="bg">
          <section className="container">
            <section className="section1">
              <div>
                <h1>Para entrar</h1>
                <h2>Lorem Ipsum is simply </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </section>
            <section className="section2">
              <div>
                <span className="test">
                  <h2 className="boasvindas">Bem-vindo ao</h2>
                  <h2 className="color">Cunhantã++ COLLEGE</h2>
                </span>
                <h1>Entrar</h1>
                <form>
                  <label htmlFor="nome_email" className="label">Nome de usuário ou endereço de e-mail</label>
                  <br />
                  <input 
                  type="text" 
                  id="nome_email" 
                  name="nome_email" 
                  placeholder="Usuário ou endereço de e-mail"
                  required />
                  <br />

                  <label htmlFor="senha" className="label">Coloque sua senha</label>
                  <br />
                  <input 
                  type="password" 
                  id="senha" 
                  name="senha"
                  placeholder="Senha" 
                  required />
                  <br />
                  <a href="blank" className="esqueceusenha">Esqueceu sua senha?</a>
                  <br />

                  <button className="entrar">Entrar</button>
                  <br />
                  <a href="blank" className="naopossuiconta">Não possui uma conta?</a>
                </form>
              </div>
            </section>
          </section>
        </div>
      </main>
    </body>
  );
}

export default App;
