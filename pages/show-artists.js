import Link from 'next/link'
import Layout from "../components/layout";

export default function ShowArtists() {
    return (
        <Layout title="Show Artists">
            <p>
                <Link href="/show-albums"><a>show albums</a></Link>
            </p>
        </Layout>
    )
}
