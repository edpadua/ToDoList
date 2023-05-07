import React from 'react'

import styles from './Principal.module.css';

import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entrada from '../Entrada';
import Todo from '../Todo';



function Principal() {

    const [todos, setTodos] = React.useState([
        {
            text: "Atividade exemplo",
            isDone: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };


    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };


    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="container">
            <Entrada addTodo={addTodo} />
            <div>
                {todos.map((todo, index) => (
                    <Card className={styles.card}>
                        <Card.Body>
                            <Todo
                                key={index}
                                index={index}
                                todo={todo}
                                markTodo={markTodo}
                                removeTodo={removeTodo}
                            />
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Principal
