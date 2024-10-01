import React from 'react';
import PropTypes from 'prop-types';

const BusquedaItem = ({ referencia, titulo, ubicacion }) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>
            <strong>{referencia}:</strong> {titulo}. {ubicacion}
        </span>
        <button type="button" className="btn btn-outline-primary">
            Ver más <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
    </li>
);

BusquedaItem.propTypes = {
    referencia: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    ubicacion: PropTypes.string.isRequired,
};

export default BusquedaItem;