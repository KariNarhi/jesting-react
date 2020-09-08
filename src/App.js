import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

const tempArr = [
  {
    fName: "John",
    lName: "Doe",
    email: "john@doe.com",
    age: 25,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
