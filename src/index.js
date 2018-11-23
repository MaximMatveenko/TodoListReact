import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import TodoList from "./TodoList"

var container = document.getElementById('root');

ReactDOM.render(<div>
    <TodoList />
</div>, container);