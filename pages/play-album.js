import Link from 'next/link'
import Layout from "../components/layout";

export default function ShowAlbums() {
    return (
        <Layout title="Play Album">
            <p>
                <Link href="/"><a>Show Sonos Groups</a></Link>
            </p>
        </Layout>
    )
}
