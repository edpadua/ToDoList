import React from 'react'

import styles from './Principal.module.css';

import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entrada from '../Entrada';
import Todo from '../Todo';
import { useState } from 'react';



function Principal() {

    const [countDone, setCountDone] = useState(0);

    const [todos, setTodos] = useState([
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
        if(newTodos[index].isDone == false){
            setCountDone(countDone + 1);
            newTodos[index].isDone = true;
            setTodos(newTodos);
            
        }
        
        
    };


    const removeTodo = index => {
        const newTodos = [...todos];
        if (newTodos[index].isDone) {
            setCountDone(countDone - 1)
        }
        newTodos.splice(index, 1);

        setTodos(newTodos);

    };

    return (
        <div className={styles.principal}>


            <div className="container">
                <div className={styles.entrada}>
                    <Entrada addTodo={addTodo} />
                    <div >
                        <div className={styles.quantidade}>
                            <p>{countDone}/{todos.length} Feitos</p>
                        </div>
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

            </div>
        </div>
    )
}

export default Principal
