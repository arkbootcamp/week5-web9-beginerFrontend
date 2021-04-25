import axios from "axios";
console.log(process.env.REACT_APP_BASE_URL);
const axiosApiIntances = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export default axiosApiIntances;
