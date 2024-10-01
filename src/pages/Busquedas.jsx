import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';
import BusquedaItem from '../components/BusquedaItem/BusquedaItem';

const Busquedas = () => {
    const [busquedas, setBusquedas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'busquedas')); 
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setBusquedas(data);
            } catch (error) {
                console.error("Error al obtener los datos de Firestore:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center mt-4">Cargando...</div>;
    }

    return (
        <div className="container mt-4">
            <h2>BÚSQUEDAS ACTIVAS</h2>
            <ul className="list-group">
                {busquedas.map(busqueda => (
                    <BusquedaItem key={busqueda.id} referencia={busqueda.referencia} titulo={busqueda.titulo} ubicacion={busqueda.ubicacion} />
                ))}
            </ul>
        </div>
    );
};

export default Busquedas;