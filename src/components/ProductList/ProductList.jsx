import { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { getCategories } from '../../services/getCategories';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviciosCollection = collection(db, 'servicios');
        const serviciosSnapshot = await getDocs(serviciosCollection);
        const serviciosList = serviciosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(serviciosList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.categoria === selectedCategory) 
    : products;

  if (loading) return <div>Cargando servicios...</div>;

  return (
    <div>
      <h2>Servicios Ofrecidos</h2>
      
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Selecciona una categoría</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h3>{product.titulo}</h3>
            <img src={product.imagen} alt={product.titulo} />
            <p>Precio: ${product.precio}</p>
            <p>Categoría: {product.categoria}</p>
            <p>Descripción: {product.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;