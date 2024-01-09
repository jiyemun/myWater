import "./App.css";
import { useState } from "react";

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

function Container(props) {
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
          props.stateTest("안녕");
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

function Footer(props) {
  return (
    // <footer onClick={props.change}>
    //   <div>footer</div>
    // </footer>
    <footer
      onClick={(e) => {
        console.log(e.target);
        e.preventDefault();
        props.change("문지예");
      }}
    >
      <div>footer</div>
    </footer>
  );
}

function App() {
  const [mode, setMode] = useState("welcome");
  const myValue = "1";
  return (
    <div className="App">
      {mode}
      <Header title="my header"></Header>
      <button
        onClick={() => {
          setMode("바꿨당");
        }}
      >
        state 를 바꿔보자!
      </button>
      <Container stateTest={setMode}></Container>
      <Footer
        change={() => {
          setMode(myValue);
        }}
      ></Footer>
    </div>
  );
}

export default App;
