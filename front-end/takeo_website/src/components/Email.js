import React from 'react';
import { useState } from 'react/cjs/react.production.min';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Email.css';
function Email() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  function postNome(event) {
    setNome = event.target.value;
  }
  function postEmail(event) {
    setEmail = event.target.value;
  }
  function postNumero(event) {
    setNumero = event.target.value;
  }

  function onSubmitEmail() {
    fetch('http://localhost:3001/email', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
  }
  return (
    <div className="all">
      <div className="top-all">
        <div className="top-title">
          <h1>Envie seu contato</h1>
        </div>
        <div className="top-text">
          <p>
            Ao enviar seu contato, entrarei em contato o mais cedo possível.
          </p>
        </div>
      </div>
      <div className="email-container">
        <div className="email">
          <Form>
            <FormGroup>
              <Label for="Email">Email:</Label>
              <Input name="email" placeholder="Email" type="email" required />
            </FormGroup>
            <FormGroup>
              <Label for="Nome">Nome:</Label>
              <Input
                id="nome"
                name="nome"
                placeholder="Nome"
                type="text"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="Telefone">Telefone:</Label>
              <Input
                id="telefone"
                name="telefone"
                placeholder="Telefone"
                type="tel"
                required
              />
            </FormGroup>

            <Button>Enviar</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Email;
