import React from 'react';
import Tarjetas from '../components/NosotrosDetail/Tarjetas';
import Testimonios from '../components/NosotrosDetail/Testimonios';

const Nosotros = () => {
  return (
    <main>
      <section className="nosotros seccion-oscura d-flex flex-column justify-content-center align-items-center py-5">
        <div className="contenedor text-center">
          <h2 className="seccion-titulo mb-4">CONOCÉ UN POCO MÁS SOBRE NOSOTROS</h2>
          <p className="seccion-texto mb-4">
            Somos un equipo multidisciplinario formado por profesionales con sólida experiencia en la Gestión del Talento, generada a partir de nuestra formación profesional y la trayectoria dentro de grandes empresas. Creemos firmemente que el crecimiento solo se logra a través de acciones concretas.
          </p>
        </div>
      </section>

      <Tarjetas />

      <Testimonios />
    </main>
  );
};

export default Nosotros;