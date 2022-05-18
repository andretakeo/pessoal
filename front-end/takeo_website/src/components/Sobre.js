import React from 'react';
import './Sobre.css';
function Sobre() {
  function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date(),
      ano_atual = d.getFullYear(),
      mes_atual = d.getMonth() + 1,
      dia_atual = d.getDate(),
      ano_aniversario = +ano_aniversario,
      mes_aniversario = +mes_aniversario,
      dia_aniversario = +dia_aniversario,
      quantos_anos = ano_atual - ano_aniversario;

    if (
      mes_atual < mes_aniversario ||
      (mes_atual === mes_aniversario && dia_atual < dia_aniversario)
    ) {
      quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
  }
  return (
    <div className="all-sobre">
      <div>
        <h1 className="titulo">Quem sou eu?</h1>
        <h5 className="texto">
          Meu nome é André Takeo Löschner Fujiwara, atualmente tenho{' '}
          {idade(2003, 3, 27)} anos de idade. Comecei o curso de Ciência de
          dados e inteligência artificial da PUC-SP em março de 2022, porém, já
          tenho experiência com web developing (React.js, Next.js, Node.js,
          Express.js, Postgresql, Redis, HTML5, CSS, Python, ...) e tenho
          interesse de aprender muito mais.
        </h5>
      </div>
    </div>
  );
}

export default Sobre;
