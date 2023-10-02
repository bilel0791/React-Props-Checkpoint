import React from "react";
import Player from "./Player";
import players from "./players";


const PlayersList = () => {
  return (
    <div style={{display:"flex"}}>
       {/* Mapping à travers la liste des joueurs */}
      {players.map((player, index) => (
        // Affichage d'un composant Player pour chaque joueur
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;