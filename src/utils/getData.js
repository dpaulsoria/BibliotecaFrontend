const API = 'http://localhost:3000/api';

const getData = async (id) => {
  const apiURl = id ? `${API}+'/books/'+${id}` : API+'/books/all';
  alert(apiURl)
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    alert(data)
    return data;
  } catch (error) {
    alert('Error')
    console.log('Fetch Error', error);
  };
};

export default getData;