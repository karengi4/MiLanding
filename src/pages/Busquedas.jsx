import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';
import BusquedaItem from '../components/BusquedaItem/BusquedaItem';
import { DotLoader } from 'react-spinners';

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
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    height: '100vh', 
                    backgroundColor: '#f8f9fa', 
                }}
            >
                <DotLoader size={60} color="#007bff" /> 
            </div>
        );
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