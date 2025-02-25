import axios from "axios";

async function fetchMovies(url: string, page: number): Promise<any> {
    const response = await axios.get(url);
    return response.data;
}
export default fetchMovies;