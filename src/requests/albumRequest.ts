import axios from "axios";

export async function getUserAlbums(userId:number){
    return await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    .then(response=>response.data);
 }