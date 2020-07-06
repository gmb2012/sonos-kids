import Link from "next/link";

export default function ShowAlbums() {
    return (
        <div>
            <Link href="/[speakergroupId]/[artistName]/[albumUri]" as="/1/theArtist/theAlbum">
                <a>To /[speakergroupId]/[artistName]/[albumUri].js</a>
            </Link>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            speakergroupId: context.params.speakergroupId,
            artistName: context.params.artistName
        }
    }
}