import React from "react";
//import wildlifeParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
//import * as RMFunctions from "./parks/RockyMountain"
/*import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";*/


export default function ColoradoStateParks() {
  //wildlifeParks(); // => "42 parks!"
//  console.log(parkTrees);
// > "Aspen and Pine"

//parkWildlife();
// > "Elk, Bighorn Sheep, Moose"

  //RMFunctions.trees()
  //RMFunctions.wildlife()

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde/>
    </div>
)}


