import Head from 'next/head'
import Link from 'next/link'

export default function ShowAlbums() {
    return (
        <div>
            <Head>
                <title>Show Albums</title>
            </Head>



            <main>
                <p>
                    <Link href="/play-album"><a>play album</a></Link>
                </p>
            </main>
        </div>
    )
}
