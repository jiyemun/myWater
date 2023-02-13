import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function TestButton(props) {
  return <div onClick={props.onChangeMode}>test</div>;
}

function handleClick(e) {
  console.log(e);
}

function Container() {
  let list = [
    { id: 1, text: "사과" },
    { id: 2, text: "당근" },
    { id: 3, text: "수박" },
  ];
  return (
    <div id="container">
      <Article item={list} />
      <button onClick={handleClick}>test button</button>
      <TestButton
        onChangeMode={() => {
          alert("메롱");
        }}
      />
    </div>
  );
}

function Article({ item }) {
  let el = [];
  for (let i = 0; i < item.length; i++) {
    el.push(<div key={item[i].id}>{item[i].text}</div>);
  }
  return <article>{el}</article>;
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
      <Header title="my header"></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
