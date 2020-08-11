import Link from "next/link";

const ShowAlbums = () => {
  return (
    <div>
      <Link
        href="/playAlbum/[speakergroupId]/[artistName]/[albumUri]"
        as="/playAlbum/1/theArtist/theAlbum"
      >
        <a href="#">
          To /playAlbum/[speakergroupId]/[artistName]/[albumUri].js
        </a>
      </Link>
    </div>
  );
};

export default ShowAlbums;
