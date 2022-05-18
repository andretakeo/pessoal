import React from 'react';
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import './Carta.css';
function Carta(props) {
  return (
    <div className="carta">
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{props.titulo}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {props.onde}
            </CardSubtitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {props.desde}
            </CardSubtitle>
            <CardText>{props.descricao}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Carta;
