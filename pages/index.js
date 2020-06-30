import Link from 'next/link'
import Layout from "../components/layout";

export default function ShowSonosGroups() {
    return (
        <Layout title="Show Sonos Groups">
            <p>
                <Link href="/show-artists"><a>Show Artists</a></Link>
            </p>
        </Layout>
    )
}
