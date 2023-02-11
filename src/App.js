import "./App.css";

function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

function Container() {
  return <div id="container">container</div>;
}

function Footer() {
  return (
    <footer>
      <div>footer</div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
