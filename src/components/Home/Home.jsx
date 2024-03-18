import Empresas from "../Empresa/Empresas.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Home.css";

export const Home = () => {
  const Paisajes = [
    {
      name: "Las Islas Ballestas + La Reserva Nacional de Paracas",
      img: "/image/Paracas.webp",
      price: "120",
    },
    {
      name: "Las Islas Ballestas + La Reserva Nacional de Paracas",
      img: "/image/Paracas.webp",
      price: "120",
    },
    {
      name: "Las Islas Ballestas + La Reserva Nacional de Paracas",
      img: "/image/Paracas.webp",
      price: "120",
    },
    {
      name: "Las Islas Ballestas + La Reserva Nacional de Paracas",
      img: "/image/Paracas.webp",
      price: "120",
    },
    {
      name: "Las Islas Ballestas + La Reserva Nacional de Paracas",
      img: "/image/Paracas.webp",
      price: "120",
    },
    {
      name: "Las Islas Ballestas + La Reserva Nacional de Paracas",
      img: "/image/Paracas.webp",
      price: "120",
    },
  ];
  return (
    <div>
      <div className="BoxTravel ">
        <div className="text-Travel">
          <h1>Viaja Con Nosotros</h1>
          <p>
            No hacemos tours masivos, solo hacemos tours en grupos pequeños. Con
            nosotros evitas grandes aglomeraciones y disfrutas de tu recorrido
            cómodamente de principio a fin.
          </p>
        </div>
        <div className="Gif">
          <img
            className="w-[400px]"
            src="/image/travel.gif"
            width="498"
            height="498"
          />
        </div>
      </div>
      <div className="section2">
        <div>
          <h2 className="text-3xl font-bold	text-[#36a9e1]">
            ¡EXPLORE LIMA CON NOSOTROS!
          </h2>
        </div>
        <div className="BoxExplore py-5">
          <div>
            <img src="/image/referencia.jpg" alt="" />
          </div>
          <div className="max-w-[570px] text-pretty">
            <p className="font-semibold text-[20px] m-[1rem] ">
              Bienvenidos! Ofrecemos experiencias culturales con grupos
              pequeños, que incluyen recojo y retornoa su hotel o departamento
              en Lima (Miraflores, San Isidro, Barranco, etc.). Nuestros guías
              expertos están capacitados para ofrecerle una experiencia
              inolvidable. ¡La excelente calidad del servicio nos caracteriza!<br></br>
              ¡Ven y descubre la fascinante historia de la ciudad de Lima con un
              guía local!
            </p>
          </div>
        </div>
      </div>

      <div className="Section3 py-[3rem]">
        <h2 className="text-center text-[30px] text-[#36a9e1] font-bold">
          TOURS MÁS POPULARES EN LIMA
        </h2>

        <div className="mx-auto p-5 grid grid-cols-3 gap-5 max-w-[1200px]">
          {Paisajes.map((paisaje) => (
            <div className="BoxPriceTravel ">
              <div className="lugar-img">
                <img className="img-lugares" src={paisaje.img} alt="" />
              </div>
              <div>
                <div className="name">
                  <h4 className="text-[#36a9e1] font-bold	text-[20px] p-2 pt-5 uppercase leading-6">
                    {paisaje.name}
                  </h4>
                </div>
                <div className="flex items-center">
                  <div className="justify-items-center w-[50%]">
                    <img
                      className="w-[90%] px-2"
                      src="/image/5stars.webp"
                      alt="Estreallas de Calificación"
                    />
                  </div>
                  <div className="precio bg-[#36A9E1]  text-white font-medium	p-3 w-[50%]">
                    <div className="">
                      <div className="desde text-center w-full max-w-full">
                        <div className="text text-white text-[11px] font-medium italic leading-[1em]">
                          DESDE:
                        </div>
                      </div>
                      <div className="flex items-center	">
                        <div className="numero pl-4">
                          <div className="text-[30px] font-bold leading-[1.2em] ">
                            <sup className="text-[0.6em]">$</sup>
                            {paisaje.price}
                          </div>
                        </div>
                        <div className="persona">
                          <div className="px-1">
                            <span className="text-white text-[11px] font-medium italic leading-normal">
                              *Por Persona
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="empresasbox py-3">
        <h3 className="text-center text-3xl font-bold	text-[#36a9e1]">
          EMPRESAS CONFIABLES
        </h3>
        <Empresas />
      </div>

            


      <Footer />
    </div>
  );
};
