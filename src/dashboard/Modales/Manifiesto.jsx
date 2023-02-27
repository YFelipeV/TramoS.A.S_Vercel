import { Document, Page, Text, View, } from "@react-pdf/renderer";

function Manifiesto() {
  return (
    <>
      <Document>
        <Page size={"A4"} orientation="landscape" >
            <View>
            <table>
                <tr >
                    <td className="d-flex ">
                <Text > Fecha expedicion</Text>
                    
                <Text>Origen del viaje</Text>
                <Text> Tipo de manifiesto</Text>
                </td>
                </tr>
                
                
            </table>
            </View>
          {/* <table style={{border:"1px solid black"}} id="tabla_manifiesto">
            <tbody style={{border:"2px solid black"}}>
            <View className="manifiesto " >
              <tr style={{border:"2px solid black"}} >
                <td colSpan="3" rowSpan="3" style={{ border: "none" }}></td>
                <td rowSpan="5" colSpan="3">
                  <Text> MANIFIESTO ELECTRONICO DE CARGA</Text>
                  <Text> TRAMO S.A.S</Text>
                  <br />
                  <Text> NIT: 151154544</Text>
                  <br />
                  <Text> Crra 4 #7-65 Popáyan-Cauca</Text>
                </td>
                <td rowSpan="5">
                  
                   
                    <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque architecto iste neque voluptatum vero laudantium
                    temporibus, unde vel iusto ex, impedit ipsa atque ratione
                    corporis rem! Quae deserunt repudiandae qui!<br></br></Text>
                     <Text> MANIFIESTO:</Text> 
                    <br />
                     <Text> AUTORIZACIÓN:</Text><Text> 325656553565565</Text>
                  
                </td>
                <td rowSpan="7"></td>

                <tr style={{border:"2px solid black"}}> 
                  <td colSpan="3" rowSpan="2" style={{ border: "none" }}>
                    
                  </td>
                </tr>

                <tr style={{border:"2px solid black"}}>
                  <td>
                      <Text> FECHA DE EXPEDICIÓN</Text>
                  </td>
                  <td colSpan="2">
                      <Text>TIPO DE MANIFIESTO</Text>
                  </td>
                  <td colSpan="2">
                      <Text> ORIGEN DEL VIAJE </Text>
                  </td>
                  <td colSpan="2">
                      <Text>DESTINO DEL VIAJE </Text>
                  </td>
                </tr>

                <tr style={{border:"2px solid black"}}>
                  <td><Text>06/05/2022</Text></td>
                  <td colSpan="2"><Text>GENERAL</Text></td>
                  <td colSpan="2"><Text>Popayan-Cauca</Text></td>
                  <td colSpan="2"><Text>El Tambo-Cauca</Text></td>
                </tr>

                <tr style={{border:"2px solid black"}}>
                  <td colSpan="8">
                     <Text>INFORMACIÓN DEL VEHICULO Y CONDUCTOR</Text>
                  </td>
                </tr>
              </tr>
              <tr style={{border:"2px solid black"}}>
            <td colSpan="2"> <Text> TITULAR DE MINIFIESTO</Text></td>
            <td> <Text> DOCUMENTO INDENTIFICACIÓN</Text></td>
            <td colSpan="3"> <Text> DIRECCIÓN</Text></td>
            <td> <Text> TELEFONO</Text></td>
            <td> <Text> CIUDAD</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="2"><Text>FRANCISCO FERNANDO PEREZ</Text></td>
            <td><Text>1059355806</Text></td>
            <td colSpan="3"><Text>CALLE 07 79 A-58</Text></td>
            <td><Text>320 7699 9910</Text></td>
            <td><Text>POPÁYAN-CAUCA</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td> <Text> PLACA</Text></td>
            <td> <Text> MARCA</Text></td>
            <td> <Text> PLACA SEMIREMOLQUE</Text></td>
            <td> <Text> CONFIGURACIÓN</Text></td>
            <td> <Text> PESO VACIO</Text></td>
            <td> <Text> N° DE POLIZA</Text></td>
            <td> <Text> COMPAÑIA DE SEGUROS SOAT</Text></td>
            <td> <Text> FECHA VENCIMIENTO SOAT</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td><Text>FGR75C</Text></td>
            <td><Text>CHEVROLET</Text></td>
            <td><Text>676 S</Text></td>
            <td><Text>2</Text></td>
            <td><Text>4000KG</Text></td>
            <td><Text>545454545454544</Text></td>
            <td><Text>SEGURO DE ESTADO</Text></td>
            <td><Text>12/02/2025</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="2"> <Text> CONDUCTOR </Text></td>
            <td> <Text> DOCUMENTO DE INDENTIFICACIÓN</Text></td>
            <td colSpan="2"> <Text> DIRECCIÓN</Text></td>
            <td> <Text> N° TELÉFONO</Text></td>
            <td> <Text> N° DE LICENCIA</Text></td>
            <td> <Text> CIUDAD</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="2"><Text>CARLOS HERNESTO MARTINEZ</Text></td>
            <td><Text>100234569</Text></td>
            <td colSpan="2"><Text>CRA 79 A-58</Text></td>
            <td><Text>320 452 8976</Text></td>
            <td><Text>11511245</Text></td>
            <td><Text>POPÁYAN-CAUCA</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="2"> <Text> CONDUCTOR N°2 </Text></td>
            <td> <Text> DOCUMENTO DE INDENTIFICACIÓN </Text></td>
            <td colSpan="2"> <Text> DIRECCIÓN CONDUCTOR N°2 </Text></td>
            <td> <Text> N° TELÉFONO </Text></td>
            <td> <Text> N° DE LICENCIA</Text></td>
            <td> <Text> CIUDAD CONDUCTOR N°2</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="2"><Text>CARLOS HERNESTO MARTINEZ</Text></td>
            <td><Text>100234569</Text></td>
            <td colSpan="2"><Text>CRA 79 A-58</Text></td>
            <td><Text>320 452 8976</Text></td>
            <td><Text>11511245</Text></td>
            <td><Text>POPÁYAN-CAUCA</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="2"> <Text> POSEEDOR O TENEDOR VEHICULO</Text></td>
            <td> <Text> DOCUMENTO DE INDENTIFICACIÓN</Text></td>
            <td colSpan="2"> <Text> DIRECCIÓN CONDUCTOR N°2</Text></td>
            <td> <Text> N° TELÉFONO</Text></td>
            <td colSpan="2"> <Text> CIUDAD</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="2"><Text>CARLOS HERNESTO MARTINEZ</Text></td>
            <td><Text>100234569</Text></td>
            <td colSpan="2"><Text>CRA 79 A-58</Text></td>
            <td><Text>320 452 8976</Text></td>
            <td colSpan="2"><Text>POPÁYAN-CAUCA</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="8"> <Text> INFORMACIÓN DE LA MERCACANCÍA TRANSPORTADA</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="5"> <Text> INFORMACIÓN MERCACANCÍA</Text></td>
            <td> <Text> INFORMACIÓN REMITENTE</Text></td>
            <td> <Text> INFORMACIÓN DESTINATARIO</Text></td>
            <td rowSpan="2"> <Text> DUEÑO POLIZA</Text> </td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td> <Text> N° REMEZA</Text> </td>
            <td> <Text> UNIDAD DE MEDIDA</Text> </td>
            <td> <Text> CANTIDAD</Text> </td>
            <td> <Text> NATURALEZA</Text> </td>
            <td> <Text> EMPAQUE-PRODUCTO TRANSPORTADO</Text> </td>
            <td> <Text> CC/NIT NOMBRE/RAZÓN SOCIAL</Text> </td>
            <td> <Text> CC/NIT NOMBRE/RAZÓN SOCIAL</Text> </td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td><Text> KILOGRAMOS</Text> </td>
            <td><Text> 1000</Text> </td>
            <td><Text> CARGA NORMAL</Text> </td>
            <td><Text> PAQUETE-HIERROS Y ACERO</Text> </td>
            <td><Text> 0234567892 Ferro Maquinas S.A.S </Text> </td>
            <td><Text> 0245484464 Maquinas Cauca S.A.S</Text> </td>
            <td><Text> a4268</Text> </td>
            <td><Text> TRAMO S.A.S</Text> </td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="6"> <Text> VALORES</Text></td>
            <td colSpan="2"> <Text> OBSERVACIONES</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td> <Text> VALOR TOTAL DEL VIAJE</Text> </td>
            <td><Text>649,456</Text></td>
            <td rowSpan="2"> <Text> LUGAR</Text> </td>
            <td rowSpan="2"><Text>POPAYAN</Text> </td>
            <td rowSpan="2"> <Text> FECHA</Text> </td>
            <td rowSpan="2"><Text>02/09/2022</Text> </td>
            <td colSpan="2" rowSpan="6"><Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repudiandae et quae dolores qui iste nemo, aperiam veritatis dicta voluptatibus distinctio expedita voluptatum cum temporibus saepe maiores? Doloremque, inventore reprehenderit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus dolorum explicabo non molestias ex animi nostrum illum sint optio. Quisquam officiis perferendis ipsum reiciendis officia fuga nam, asperiores ut.</Text>
            </td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td> <Text> RETENCIÓN EN LA FUENTE</Text></td>
            <td><Text>6,456</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td> <Text> RETENCIÓN ICA </Text></td>
            <td><Text>0</Text></td>
            <td colSpan="4" rowSpan="2"> <Text> CARGO PAGADO POR: REMITENTE </Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td> <Text> NETO A PAGAR</Text></td>
            <td> <Text>655,912</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td> <Text> VALOR ANTICIPO</Text></td>
            <td><Text>0</Text></td>
            <td colSpan="4" rowSpan="2"> <Text> CARGO PAGADO POR: DESTINATARIO</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td> <Text> SALDO A PAGAR</Text></td>
            <td ><Text>655,912</Text></td>
        </tr>
    
        <tr style={{border:"2px solid black"}}>
            <td colSpan="8" style={{textAlign:"left"}}> <Text> VALOR A PAGAR EN LETRAS: SEISCIENTOS CINCUENTA Y CINCO MIL NOVECIENTOS DOCE PESOS M/C </Text></td>
        </tr>
    
        <tr style={{height: "200px"}}  valign="top">
            <td colSpan="3"> <Text> DOCUMENTO FIRMADO DIGITALMENTE POR LA EMPRESA: TRAMO S.A.S</Text></td>
            <td colSpan="3" > <Text> FIRMA Y HUELLA TITULAR MANIFIESTO</Text></td>
            <td colSpan="3"> <Text> FIRMA Y HUELLA DEL CONDUCTOR</Text></td>
        </tr>
              
            </View>
            </tbody>

            
          </table> */}
        </Page>
      </Document>
    </>
  );
}

export default Manifiesto;
