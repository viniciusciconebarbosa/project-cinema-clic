import axios, { AxiosResponse } from "axios";

async function fetchMovies(url: string): Promise<AxiosResponse<any, any>> {
    const response = await axios.get(url);
    return response.data;
}
export default fetchMovies;