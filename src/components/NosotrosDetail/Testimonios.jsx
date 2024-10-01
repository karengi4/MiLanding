import React from 'react';
import ricardo from '../../assets/images/ricardo.jpg';
import demian from '../../assets/images/demian.jpg'
import laura from '../../assets/images/laura.jpg'

const Testimonios = () => {
  return (
    <section className="testimonios seccion-clara text-center d-flex flex-column justify-content-center align-items-center">
      <h2 className="seccion-titulo">Testimonios</h2>
      <h3 className="seccion-descripcion">Estos son algunos de los testimonios de nuestros clientes</h3>

      <div id="testimonios-carrusel" className="carousel carousel-dark" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <img className="testimonio-imagen rounded-circle" src={ricardo} alt="Foto de Ricardo" />
              <p className="testimonio-texto text-center">“Hemos quedado sumamente conformes con el asesoramiento recibido porque nos permitió avanzar rápidamente con nuestros requerimientos siendo dinámico y ágil. Esperamos seguir contando con ustedes en nuevos proyectos".</p>
              <div className="testimonio-info">
                <p className="cliente">Ricardo</p>
                <p className="cargo">Director General de Altos del Mar</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <img className="testimonio-imagen rounded-circle" src={demian} alt="Foto de Demian" />
              <p className="testimonio-texto text-center">"Realizamos un taller con nuestros equipos donde los comentarios recibidos fueron muy positivos, y sin dudas ha sido, hasta el momento, el taller que mejor nos transmitió herramientas prácticas para incorporar durante la jornada".</p>
              <div className="testimonio-info">
                <p className="cliente">Demian</p>
                <p className="cargo">Gerente de FrioSur</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <img className="testimonio-imagen rounded-circle" src={laura} alt="Foto de Laura" />
              <p className="testimonio-texto text-center">"Hemos obtenido un proceso de selección serio y profesional con un gran resultado en la conformación de equipos en nuestros emprendimientos. Queremos seguir trabajando juntos ya que los resultados quedan demostrados rápidamente.”</p>
              <div className="testimonio-info">
                <p className="cliente">Laura</p>
                <p className="cargo">Directora de Innovarg</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonios;