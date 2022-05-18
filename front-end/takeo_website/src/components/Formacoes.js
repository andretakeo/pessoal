import React, { useState, useEffect } from 'react';
import './Formacoes.css';
import Carta from './Carta/Carta.js';
function Formacoes() {
  const [formacao, setFormacao] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/formacao/')
      .then((res) => res.json())
      .then((data) => setFormacao(data));
  });

  return (
    <div>
      <div className="carta-container">
        {formacao &&
          formacao.map((data) => {
            return (
              <Carta
                titulo={data.title}
                onde={data.where}
                desde={data.since}
                descricao={data.description}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Formacoes;
