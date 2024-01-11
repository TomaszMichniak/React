import { useEffect, useState } from "react";
import { Album } from "../types/albumType";
import { getUserAlbums } from "../requests/albumRequest";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function AlbumsList() {
  const [albums, setAlbums] = useState<Album[] | null>(null);
  let { userId } = useParams<{ userId: string }>();
  if (userId === undefined) {
    throw new Error("undefined Parms");
  }
  const userIdNumber = Math.abs(parseInt(userId));
  useEffect(() => {
    (async () => {
      const data = await getUserAlbums(userIdNumber);
      setAlbums(data);
    })();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <table className="table-auto border mx-5">
        <thead>
          <tr className="">
            <th className="">Id</th>
            <th>Title</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
            {albums?.map((album,index)=>(
                <tr className="border text-center">
                    <td className="p-1">{album.id}</td>
                    <td className="p-1">{album.title}</td>
                    <td className="hover:bg-white"><Link className=""
                    to={`${album.id}/photos`}>
                    Photos</Link></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
