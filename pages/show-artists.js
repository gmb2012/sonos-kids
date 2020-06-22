import Head from 'next/head'
import Link from 'next/link'

export default function ShowArtists() {
    return (
        <div>
            <Head>
                <title>Show Artists</title>
            </Head>



            <main>
                <p>
                    <Link href="/show-albums"><a>show albums</a></Link>
                </p>
            </main>
        </div>
    )
}
