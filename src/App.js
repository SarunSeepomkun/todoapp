import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./database/firebase";
import firebase from "firebase";
import checklistLogo from './images/checklist.png';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todolist")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodoList(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todolist").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  const deleteTodo = (e) => {
    e.preventDefault();
    db.collection("todolist").doc(e.target.value).delete();
  };

  return (
    <div className="container">
      <div className="header"><img alt="checklist" src={checklistLogo} />Todolist</div>

      <div className="content">
        <ul id="list">
          {todoList
            ? todoList.map((data, index) => (
                <li id={"li__" + index} className="item">
                  <span className="text">{data.todo}</span>
                  <button
                    id={"btDel__" + index}
                    className="btnDelete"
                    onClick={deleteTodo}
                    value={data.id}
                  >
                    -
                  </button>
                </li>
              ))
            : ""}
        </ul>
      </div>
      <form>
        <div className="add-to-do">
          <input
            placeholder="add a todo"
            className="textbox"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            className="btnSubmit"
            type="submit"
            onClick={addTodo}
            disabled={!input}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
