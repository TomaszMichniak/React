import axios from "axios";

export async function getPhotoByAlbumId(albumId:number){
    return await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then(response=>response.data);
}