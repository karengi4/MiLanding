import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState([
    {
      id: "1",
      name: "Búsqueda y selección",
      price: 10000,
      category: "Servicios Generales",
      img: "https://via.placeholder.com/150",
      stock: 25,
      description:
        "Llevamos a cabo la totalidad del proceso de búsqueda y selección de recursos humanos...",
    },
    {
      id: "2",
      name: "Gestión integral del talento",
      price: 15000,
      category: "Servicios Personalizados",
      img: "https://via.placeholder.com/150",
      stock: 20,
      description:
        "Ponemos en marcha distintos procesos como el análisis de la estructura organizacional...",
    },
    {
      id: "3",
      name: "Evaluación y desarrollo profesional",
      price: 12000,
      category: "Servicios Generales",
      img: "https://via.placeholder.com/150",
      stock: 20,
      description:
        "Este proceso se aplica especialmente para valorar los recursos y las competencias...",
    },
    {
      id: "4",
      name: "Capacitación y formación",
      price: 8000,
      category: "Servicios Generales",
      img: "https://via.placeholder.com/150",
      stock: 20,
      description:
        "Brindamos capacitaciones de RRHH a empresas en función de sus necesidades...",
    },
    {
      id: "5",
      name: "Compensación y beneficios",
      price: 8500,
      category: "Servicios Generales",
      img: "https://via.placeholder.com/150",
      stock: 20,
      description:
        "Para tener una relación exitosa con tus empleados es fundamental que el trabajo sea correctamente remunerado...",
    },
    {
      id: "6",
      name: "Asesoría personalizada",
      price: 18000,
      category: "Servicios Personalizados",
      img: "https://via.placeholder.com/150",
      stock: 20,
      description:
        "A través de este asesoramiento integral externo, nuestros clientes delegan su Gestión Interna vinculada a la Administración de los Recursos Humanos...",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);