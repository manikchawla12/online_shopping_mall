import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:3000/product";

class Service {

    getEmployees(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createEmployee(product){
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getEmployeeById(id){
        return axios.get(PRODUCT_API_BASE_URL + '/' + id);
    }

    updateEmployee(product, id){
        return axios.put(PRODUCT_API_BASE_URL + '/' + id, product);
    }

    deleteEmployee(id){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + id);
    }
}

export default Service()