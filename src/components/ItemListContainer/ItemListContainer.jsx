import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { db } from '../../services/firebase/firebaseConfig'; 
import { DotLoader } from 'react-spinners';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const serviciosCollection = collection(db, 'servicios'); 
        const serviciosSnapshot = await getDocs(serviciosCollection);
        const serviciosList = serviciosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        setItems(serviciosList);
      } catch (error) {
        console.error("Error al obtener servicios: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      {loading ? <DotLoader /> : <ItemList items={items} />}
    </>
  );
};

export default ItemListContainer;