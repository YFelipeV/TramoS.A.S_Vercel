import { useConductores } from "../../Context/Context";

import { useState } from "react";
import {Link, Navigate} from 'react-router-dom'
import Manifiesto from "../Modales/Manifiesto";


function HistorialCards() {
  const { Historial } = useConductores();
  // const [pdf, setPdf] = useState(false);
 

  // function lo() {
  //   setPdf(!pdf);
  //   if (pdf == true) {
  //     return (
  //       <Navigate to={"/manifiesto"} ><Manifiesto/></Navigate>
      
  //     )
  //   }
  // }
  return (
    <>
      {Historial.map(({ name, id, username, address }) => (
        <tr key={id}>
          <td className="text-center p-4">{name}</td>
          <td className="text-center pt-4 ">{username}</td>
          <td className="text-center pt-4">{id} toneladas</td>
          <td className="text-center pt-4">{address.street}</td>
          <td className="text-center pt-4">${address.geo.lat}</td>
          <td className="text-center pt-4">
            <div className="manifiesto ">
              <Link to={"/manifiesto"} className="text-danger" >
                Ver manifiesto
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default HistorialCards;
