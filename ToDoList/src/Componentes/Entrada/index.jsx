import React from 'react'

import styles from './Entrada.module.css';

import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Entrada({ addTodo }) {

    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };

    return (
        <Form className={styles.form_adicionar} onSubmit={handleSubmit}>
            <Form.Group className={styles.form_group_adicionar}>
                
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Adicionar novo item" />
            </Form.Group>
            <Button className={styles.button_add} type="submit">
                Inserir
            </Button>
        </Form>
    )
}

export default Entrada
