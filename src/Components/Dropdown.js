import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "../App.css"

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button id = "leftLittleSpace" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{props.name} - {props.scientificName}</Button>
      <Collapse className = "leftSpace lilSpace" isOpen={isOpen}>
        <Card>
          <CardBody>
            <p>Natural Solution - {props.naturalSolution} </p>
            <p>Chemical Solution - {props.chemicalSolution} </p>
            <p>External Link - <a target = "_blank" href = {props.externalLink}>{props.externalLink} </a></p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Dropdown;