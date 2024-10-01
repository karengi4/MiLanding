import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      try {
        const itemRef = doc(db, 'items', id);
        const docSnap = await getDoc(itemRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('No se encontró el documento'); 
        }
      } catch (err) {
        setError('Error al obtener el documento: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    getItem();
  }, [id]);

  return (
    <div>
      {loading ? <p>Cargando...</p> : error ? <p>{error}</p> : <ItemDetail {...item} />}
    </div>
  );
};

export default ItemDetailContainer;