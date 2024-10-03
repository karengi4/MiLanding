import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../services/firebase/firebaseConfig'; 
import { DotLoader } from 'react-spinners';


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = doc(db, 'servicios', id);
        const docSnap = await getDoc(itemDoc);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('No se encontró el servicio');
        }
      } catch (err) {
        setError('Error al obtener el servicio: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);


return (
  <div>
    {loading ? (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: '100vh', 
          backgroundColor: '#f8f9fa', 
        }}
      >
        <DotLoader size={60} color="#007bff" />
      </div>
    ) : error ? (
      <p>{error}</p>
    ) : (
      <ItemDetail {...item} />
    )}
  </div>
);
};

export default ItemDetailContainer;