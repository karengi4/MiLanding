const categoriesData = [
  { id: '1', name: 'Servicios Generales' },
  { id: '2', name: 'Servicios Personalizados' }
];

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categoriesData);
    }, 1000);
  });
};