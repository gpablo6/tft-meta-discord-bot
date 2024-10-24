import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 60
});


export async function sampleGet() {
    try {
        const response = await axiosInstance.get(
            '/RESOURCE/',
            {
                params: {
                    limit: 10,
                    skip: 5, 
                    select: 'key1,key2,key3'  
                }
            }   
        );
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
