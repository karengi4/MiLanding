import React from 'react';

const Tarjetas = () => {
  return (
    <section className="nosotros-inferior seccion-clara d-flex flex-column justify-content-center align-items-center">
      <div className="container text-center">
        <div className="row">
          {/* Tarjeta de Visión */}
          <div className="columna col-12 col-md-4 d-flex flex-column justify-content-evenly">
            <img src="../assets/images/vision.jpg" alt="Visión" />
            <h4 className="nosotros-titulo">Visión</h4>
            <p>
              Ser una Consultora de Recursos Humanos que destaque por la calidad y excelencia en la prestación de sus servicios y brinde acompañamiento a organizaciones e individos, optimizando sus propios recursos en la búsqueda del cambio y la mejora.
            </p>
            <div className="badge-contenedor">
              <span className="badge text-bg-naranja">Calidad</span>
              <span className="badge text-bg-naranja">Excelencia</span>
              <span className="badge text-bg-naranja">Optimización</span>
            </div>
          </div>

          {/* Tarjeta de Misión */}
          <div className="columna col-12 col-md-4 d-flex flex-column justify-content-evenly">
            <img src="../assets/images/mision.jpg" alt="Misión" />
            <h4 className="nosotros-titulo">Misión</h4>
            <p>
              Brindar consultoría y asesoramiento personalizado a nuestros clientes en materia de Gestión del Talento con el objetivo de satisfacer sus necesidades y generar valor, incorporando talento estratégico e implementando soluciones valiosas.
            </p>
            <div className="badge-contenedor">
              <span className="badge text-bg-naranja">Satisfacción</span>
              <span className="badge text-bg-naranja">Necesidades</span>
              <span className="badge text-bg-naranja">Soluciones</span>
            </div>
          </div>

          {/* Tarjeta de Valores */}
          <div className="columna col-12 col-md-4 d-flex flex-column justify-content-evenly">
            <img src="../assets/images/valores.jpg" alt="Valores" />
            <h4 className="nosotros-titulo">Valores</h4>
            <p>
              Compromiso, ética e integridad en el trabajo, flexibilidad para adaptarnos rápidamente a las necesidades de nuestros clientes e innovación en nuestros procesos de mejora continua para lograr la máxima calidad en nuestros servicios.
            </p>
            <div className="badge-contenedor">
              <span className="badge text-bg-naranja">Confidencialidad</span>
              <span className="badge text-bg-naranja">Flexibilidad</span>
              <span className="badge text-bg-naranja">Innovación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarjetas;