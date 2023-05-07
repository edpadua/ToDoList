import React from 'react'

import styles from './Todo.module.css';

import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) {
    return (
        <div
            className="todo"

        > 
            <h2 className={ todo.isDone ? styles.nome_atividade_done: styles.nome_atividade }>{todo.text}</h2>
            <div>
                <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
            </div>
        </div>
    )
}

export default Todo
