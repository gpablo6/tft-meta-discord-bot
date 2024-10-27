import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 1000
});


export async function sampleGet() {
    try {
        const response = await axiosInstance.get(
            '/recipes',
            {
                params: {
                    limit: 10,
                    skip: 5, 
                    select: 'name'  
                }
            }   
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    
}
