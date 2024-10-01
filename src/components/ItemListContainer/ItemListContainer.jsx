import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const querySnapshot = await getDocs(collection(getFirestore(db), 'items'));
      const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(docs);
      setLoading(false);
    };

    getItems();
  }, []);

  return (
    <div>
      {loading ? <p>Cargando servicios...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;