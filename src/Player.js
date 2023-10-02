//importaion
import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';


const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  
  return (
    <div >
      
    {/* Composant Card de react-bootstrap */}
    <Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src={imageUrl} className="cover-image" />
      <Card.Body >
         {/* Titre du joueur */}
         
      <Card.Title className="title">{name}</Card.Title>
      {/* Détails du joueur */}
      <Card.Text>
            Team: {team}<br />
            Nationality: {nationality}<br />
            Jersey Number: {jerseyNumber}<br />
            Age: {age}
          </Card.Text>
      </Card.Body>
    </Card>
    </div>
     );
};
// Define default props for each attribute
Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: "Unknown",
  age: "Unknown",
  imageUrl: ""
};
export default Player;