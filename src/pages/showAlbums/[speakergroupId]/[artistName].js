import Link from "next/link";

export default function ShowAlbums() {
    return (
        <div>
            <Link href="/playAlbum/[speakergroupId]/[artistName]/[albumUri]" as="/playAlbum/1/theArtist/theAlbum">
                <a>To /playAlbum/[speakergroupId]/[artistName]/[albumUri].js</a>
            </Link>
        </div>
    )
}