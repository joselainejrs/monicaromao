
// const API_URL = 'http://backend-api.com';

export const getUser = async () => {
  try {
    // const response = await fetch(`${API_URL}/usuario`);
    // if (!response.ok) {
    //   throw new Error('Erro ao buscar o usuário');
    // }
    // const userData = await response.json();
    const userData = { tipo_usuario: 'cliente' };
    return userData;
  } catch (error) {
    console.error('Erro:', error);
    throw error; // Propaga o erro para o componente que chama
  }
};
