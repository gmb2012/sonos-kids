import Link from "next/link";
import useSpeakers from "../../hooks/useSpeakers";

export default function ShowArtists({ speakergroupId }) {
    console.log("huhu");
    const artistName = "Benjamin Blümchen";

    return (
        <div>
            <div>
                <Link href="/showAlbums/[speakergroupId]/[artistName]" as={`/showAlbums/${speakergroupId}/${artistName}`}>
                    <a>To /showAlbums/[speakergroupId]/[artistName].js</a>
                </Link>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = useSpeakers().speakers.map(speaker => {
        return { "params": { "speakergroupId": speaker.id } }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    return { props: { speakergroupId: context.params.speakergroupId } }
}