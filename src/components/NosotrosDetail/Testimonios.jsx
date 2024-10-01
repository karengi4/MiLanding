import React from 'react';
import ricardo from '../../assets/images/ricardo.jpg';
import demian from '../../assets/images/demian.jpg';
import laura from '../../assets/images/laura.jpg';

const Testimonios = () => {
  return (
    <section className="bg-light text-center d-flex flex-column justify-content-center align-items-center py-5">
      <h2 className="display-4 mb-4">Testimonios</h2>
      <h3 className="lead mb-5">Estos son algunos de los testimonios de nuestros clientes</h3>

      <div id="testimonios-carrusel" className="carousel carousel-dark" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <img className="rounded-circle mb-3" src={ricardo} alt="Foto de Ricardo" width="150" height="150" />
              <p className="lead">“Hemos quedado sumamente conformes con el asesoramiento recibido porque nos permitió avanzar rápidamente con nuestros requerimientos siendo dinámico y ágil. Esperamos seguir contando con ustedes en nuevos proyectos".</p>
              <div className="mt-3">
                <p className="font-weight-bold">Ricardo</p>
                <p className="text-muted">Director General de Altos del Mar</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <img className="rounded-circle mb-3" src={demian} alt="Foto de Demian" width="150" height="150" />
              <p className="lead">"Realizamos un taller con nuestros equipos donde los comentarios recibidos fueron muy positivos, y sin dudas ha sido, hasta el momento, el taller que mejor nos transmitió herramientas prácticas para incorporar durante la jornada".</p>
              <div className="mt-3">
                <p className="font-weight-bold">Demian</p>
                <p className="text-muted">Gerente de FrioSur</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <img className="rounded-circle mb-3" src={laura} alt="Foto de Laura" width="150" height="150" />
              <p className="lead">"Hemos obtenido un proceso de selección serio y profesional con un gran resultado en la conformación de equipos en nuestros emprendimientos. Queremos seguir trabajando juntos ya que los resultados quedan demostrados rápidamente.”</p>
              <div className="mt-3">
                <p className="font-weight-bold">Laura</p>
                <p className="text-muted">Directora de Innovarg</p>
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