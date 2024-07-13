import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class TextInput extends React.Component {
  render() {
    const { id, name, placeholder } = this.props;
    return (
      <div>
        <label htmlFor="some-id">Some text input</label>
        <input id="some-id" type="text" />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <TextInput
        id="my-custom-id"
        name="my-custom-name"
        placeholder="Placeholder text"
        onChange={value => {
          console.log(value);
          alert(value);
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
