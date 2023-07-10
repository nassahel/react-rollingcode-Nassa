import axios from 'axios';
import { URL } from '../constants';

export const getAxiosData = async(path) => {
  try {
    const res = await axios.get(`${URL}${path}`);
    return res.data;
  } catch (error) {
    console.log(`------ERROR EN '${path}' -----`, error)
  }
};
