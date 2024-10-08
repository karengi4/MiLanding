import { useEffect, useState, useContext } from 'react';
import { db } from '../../services/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { getCategories } from '../../services/getCategories';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

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
    <div className="container ">
      <h3 className="my-4 text-center">Conocé nuestra amplia variedad de servicios para elegir aquel que mejor se adapte a tus necesidades</h3>
      
      <select onChange={handleCategoryChange} value={selectedCategory} className="form-select mb-3 text-center">
        <option value="">Seleccioná una categoría</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card d-flex flex-column align-items-center h-100 " style={{backgroundColor: '#ADD8E6'}}>
              <img src={product.imagen} alt={product.titulo} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.titulo}</h5>
                <p className="card-text">Precio: ${product.precio}</p>
                <p className="card-text">Descripción: {product.descripcion ? product.descripcion : 'Sin descripción disponible'}</p>
                <Link to={`/servicios/${product.id}`} className="btn btn-primary">
                  Ver Más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;