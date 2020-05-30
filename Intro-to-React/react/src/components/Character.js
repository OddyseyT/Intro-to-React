import React from "react";
import { Container, Col, Row, Card, CardHeader, CardImg, CardFooter, CardBody,
 CardText } from 'reactstrap';
 
 // Write your Character component here
function Character (props) {
  console.log(props.characterArray)

    return(
        <Container>
          <Row>
        {props.characterArray.map(character => {
         return(    

<Col xs="3">
<Card key = {character.created} >
      <CardHeader>{character.name}</CardHeader>
      <CardBody>
      <CardImg src={character.image}>
         </CardImg>
        <CardText>{character.status}</CardText>
        <CardText>{character.species}</CardText>
      </CardBody>
      <CardFooter>{`Created: ${character.created}`}
      </CardFooter>
    </Card>
</Col>)})}
</Row>
        </Container>
         );}
 

export default Character;