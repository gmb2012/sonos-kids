import Link from 'next/link'
import Layout from "../components/layout";

export default function ShowAlbums() {
    return (
        <Layout title="Show Albums">
            <p>
                <Link href="/play-album"><a>Play Album</a></Link>
            </p>
        </Layout>
    )
}
