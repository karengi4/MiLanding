import React from 'react';

const Nosotros = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Nosotros</h1>
      <p className="lead">
        Somos un equipo dedicado a brindar servicios de Recursos Humanos, enfocados en el crecimiento y bienestar organizacional.
      </p>

      <h2 className="mt-5">Nuestra Misión</h2>
      <p>
        Nuestra misión es ayudar a las empresas a optimizar su gestión del talento, creando un entorno laboral donde los empleados puedan alcanzar su máximo potencial.
      </p>

      <h2 className="mt-5">Nuestro Equipo</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Miembro del equipo" />
            <div className="card-body">
              <h5 className="card-title">Nombre del Miembro</h5>
              <p className="card-text">Descripción breve sobre el miembro del equipo.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Miembro del equipo" />
            <div className="card-body">
              <h5 className="card-title">Nombre del Miembro</h5>
              <p className="card-text">Descripción breve sobre el miembro del equipo.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Miembro del equipo" />
            <div className="card-body">
              <h5 className="card-title">Nombre del Miembro</h5>
              <p className="card-text">Descripción breve sobre el miembro del equipo.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-5">Nuestros Valores</h2>
      <ul className="list-group">
        <li className="list-group-item">Integridad</li>
        <li className="list-group-item">Compromiso</li>
        <li className="list-group-item">Innovación</li>
        <li className="list-group-item">Colaboración</li>
      </ul>

      <h2 className="mt-5">Contáctanos</h2>
      <p>
        Para más información sobre nuestros servicios, no dudes en <a href="/Contacto">contactarnos</a>.
      </p>
    </div>
  );
};

export default Nosotros;
