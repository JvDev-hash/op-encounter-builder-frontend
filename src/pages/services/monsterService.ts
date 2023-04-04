import axios from 'axios';

const baseUrl = 'https://ordem-paranormal-builder-production.up.railway.app'

export async function getAll() {
  try {
    const response = await axios.get(baseUrl + '/enemies');

    return response.data;

  } catch (error) {
    console.error(error);
  }
}

export async function getByType(type: String) {
  try {
    const response = await axios.get(baseUrl + '/enemies' + type);
    return response.data;

  } catch (error) {
    console.error(error);
  }
}