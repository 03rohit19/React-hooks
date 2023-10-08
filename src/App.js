import "./App.css";
import React, { useState } from "react";
import Counter from "./Counter";
import Text from "./Text";
import CheckBox from "./CheckBox";
import TwoVar from "./TwoVar";
import Updaterfn from "./Updaterfn";
import NestedForm from "./NestedForm";
import Refer from "./Refer";
import UseRef from "./UseRef";
import ChatApp from "./ChatApp";

function App() {
  return (
    <div className="App">
      App
      <ComponentsWithHook> </ComponentsWithHook>
      <Counter></Counter>
      <Text></Text>
      <div className="App">
        <CheckBox></CheckBox>
        <TwoVar />
        <Updaterfn />
        <div className="App">
          <NestedForm />
          <Refer></Refer>
          <div className="App">
            {" "}
            <UseRef />
          </div>
        </div>
      </div>
      <div className="App">
        <ChatApp />
      </div>
    </div>
  );
}

function ComponentsWithHook() {
  const [form, setForm] = useState({
    firstname: "rohit",
    secondname: "singh",
    gmail: "rohitfriday01@gmail.com",
  });
  return (
    <div className="App">
      <label>
        Firstname :
        <input
          value={form.firstname}
          onChange={(e) => {
            setForm({ ...form, firstname: e.target.value });
          }}
        />
      </label>
      <label>
        Secondname :
        <input
          value={form.secondname}
          onChange={(e) => {
            setForm({ ...form, secondname: e.target.value });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.gmail}
          onChange={(e) => {
            setForm({ ...form, gmail: e.target.value });
          }}
        />
      </label>
      <p>
        {form.firstname}
        {""}
        {form.secondname}
        {""}({form.gmail})
      </p>
    </div>
  );
}

export default App;
