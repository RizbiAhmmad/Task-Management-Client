import Axios  from "axios";

const axiosPublic=Axios.create({
    baseURL: "https://y-gray-eight.vercel.app",
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;