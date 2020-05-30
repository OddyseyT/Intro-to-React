import React from "react";
import { Container, Col, Row,Card, CardHeader, CardFooter, CardBody,
 CardText } from 'reactstrap';
 
 // Write your Character component here
function Character (props) {
  console.log(props.characterArray)

    return(
        <div>
        {props.characterArray.map((character) => {
         return(    

<Col xs="3">
<Card key = {character.created} >
      <CardHeader>{character.name}</CardHeader>
      <CardBody>
      <img
          alt="post thumbnail"
         className="post-image"
         src={props.Picture}
       />
        
        <CardText>{props.status}</CardText>
        <CardText>{props.species}</CardText>
      {/* //  <Button>Go somewhere</Button> */}
      </CardBody>
      <CardFooter>{`Created: ${props.Date}`}
      </CardFooter>
    </Card>
</Col>)})}
</div>
         );}
 

export default Character;