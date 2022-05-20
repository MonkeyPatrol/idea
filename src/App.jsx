import React from "react";
import Header from "./components/Header";
import Notice from "./components/Notice";
import exploracion from "./assets/exploracion.jpg";
import add from "./assets/add.png";
import menu from "./assets/menu.png";
import flow from "./assets/flow.png";
import tablet from "./assets/tablet.jpg";
import mediumZoom from "medium-zoom";

const App = () => {
  React.useEffect(() => {
    mediumZoom(".image");
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <Notice>
          Hasta el momento es un <b>proyecto en desarrollo</b> que puede tener
          cambios. Además es un proyecto hecho 100% por estudiantes y sin fines
          de lucro.
        </Notice>
        <p>
          Los <b>monos tití</b> son una especie endémica del caribe colombiano
          que se encuentran en <b>grave estado de amenaza</b>, cada ejemplar se
          trata con muchísimo cuidado, siendo censado constantemente por las
          personas que se encargan de cuidarlos.
        </p>
        <p>
          Pero hacer esto es <b>una tarea ardua</b>, que requiere de horas de
          trabajo y exploración para poder recolectar la mayor cantidad de
          información posible, y así, poder{" "}
          <b>generar nuevas estrategias de conservación</b>.
        </p>
        <Notice>Puedes ampliar una imagen al pulsarla.</Notice>
        <br />
        <img
          src={exploracion}
          alt="exploradores buscando el mono titi"
          className="image"
        />
        <small className="caption">
          Foto sacada del{" "}
          <a
            href="https://instagram.com/proyectotiti"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram de Proyecto Tití
          </a>
        </small>
        <p>
          Queremos hacer este <b>trabajo mas fácil</b> con tecnología y dar a
          los cuidadores una herramienta intuitiva e automatizada basada en{" "}
          <b>inteligencia articial</b>.
        </p>
        <p>
          Nuestra premisa es entregar <b>un dispositivo autónomo</b>, que cuente
          con una cámara y distintos sensores para poder llevar fácilmente un
          registro de los especímenes y poder{" "}
          <b>automáticamente guardar esta información en internet</b> para tener
          un registro global de avistamientos y tener un control total de la
          información desde cualquier parte del mundo.
        </p>
        <img src={menu} alt="Mockup del menu de la app" className="image" />
        <small className="caption">
          En el menú podremos ver los diferentes titís censados e información
          importante
        </small>
        <p>
          Y que hacer este trabajo sea tan fácil como tomar una foto, agregar
          cualquier información que pueda ser relevante y pulsar un botón.
        </p>
        <img
          src={add}
          alt="Mockup de la seccion para añadir un nuevo especimen"
          className="image"
        />
        <small className="caption">
          En esta sección podremos añadir un nuevo especimen a la base de datos,
          además de poder agregar notas sobre el mismo
        </small>
        <br />
        <h2>Flujo de la app</h2>
        <br />
        <img src={flow} alt="Diagrama de flujo de la app" className="image" />
        <p>
          Este dispositivo tendrá un cliente basado en capacitor.js en donde
          mediante una UI basada en Web podremos automáticamente tomar la foto,
          correr el modelo de AI y enviar por medio de SMS/MMS los datos al
          servidor, así no depender de la conectividad de internet para mandar
          información.
        </p>
        <p>
          En el servidor usaremos Twillio para poder procesar los SMS/MMS y así,
          procesarlos para poder llevarlos a la base de datos y este disponible
          en todos los clientes.
        </p>
        <p>
          Cuando esta información llegue a la base de datos por medio de un
          webhook va a actualizar los distintos clientes de la aplicación y
          enviará push notifications a todos los dispositivos que estén
          registrados.
        </p>
        <p>
          En el cliente web el usuario podrá ver los reportes, expediciones
          programadas, información importante, entre otros.
        </p>
        <hr />
        <h2>El dispositivo</h2>
        <br />
        <img
          src={tablet}
          alt="Ejemplo de dispositivo basado en Rapsberry Pi"
          className="image"
        />
        <small className="caption">
          Ejemplo de dispositivo basado en Rapsberry Pi
        </small>
        <br />
        <h3>Piezas</h3>
        <br />
        <ul>
          <li>
            Rapsberry Pi 4 (Con almacenamiento, ventilación, etc.) - $ 500.000
          </li>
          <li>Arduino R3 - $30.000</li>
          <li>Sensores y otras piezas - $200.000</li>
          <li>Pantalla Touch - $350.000</li>
          <li>Camera - $400.000</li>
          <li>Modulo SIM - $250.000</li>
          <li>Batería 26000mah - $300.000</li>
          <li>Custom Case - $50.000</li>
        </ul>
        <p>
          <b>Total: $2.080.000</b>
        </p>
        <footer>
          <p className="center">
            <b>
              &copy; MonkeyPatrol {new Date().getFullYear()}.{" "}
              <a href="mailto:hola@monkeypatrol.co">Envianos un email</a>.{" "}
              <a
                href="https://github.com/monkeypatrol/idea"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Source
              </a>
              .{" "}
              <a
                href="https://analytics.scidroid.co/share/lHrk0FKU/MonkeyPatrol"
                target="_blank"
                rel="noopener noreferrer"
              >
                Analíticas
              </a>
            </b>
          </p>
        </footer>
      </main>
    </>
  );
};

export default App;
