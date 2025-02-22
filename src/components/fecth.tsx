import axios from "axios";

async function fetchMovies(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
}
export default fetchMovies;