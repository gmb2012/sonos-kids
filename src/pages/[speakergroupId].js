import Link from "next/link";

export default function ShowArtists({ speakergroupId }) {
    return (
        <div>
            <div>
                <Link href="/[speakergroupId]/[artistName]" as="/1/theArtist">
                    <a>To /[speakergroupId]/[artistName].js</a>
                </Link>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    return { props: { speakergroupId: context.params.speakergroupId } }
}