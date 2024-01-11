import { useState, useEffect } from "react";
import { Photo } from "../types/photoType";
import { useNavigate, useParams } from "react-router";
import { getPhotoByAlbumId } from "../requests/photoRequest";
import { Link } from "react-router-dom";

export default function PhotosList() {
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  let { albumId } = useParams<{ albumId: string }>();
  if (albumId === undefined) {
    throw new Error("undefined Parms");
  }
  const albumIdNumber = Math.abs(parseInt(albumId));
  useEffect(() => {
    (async () => {
      const data = await getPhotoByAlbumId(albumIdNumber);
      setPhotos(data);
    })();
  });
const navigate=useNavigate();
  return (
    <div className="md:container h-100 w-full flex items-center justify-center ">
          <button className="" onClick={() => navigate(-1)}>Go back</button>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-5">
        {photos?.map((photo, index) => (
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo.url}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
