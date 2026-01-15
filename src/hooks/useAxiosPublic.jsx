import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://foodi-server31.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
