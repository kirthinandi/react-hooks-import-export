import React from "react";
//import aDifferentName from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  //aDifferentName(); // => "42 parks!"
  //return <h1>Colorado State Parks!</h1>;

  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;
