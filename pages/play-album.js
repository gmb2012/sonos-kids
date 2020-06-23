import Head from 'next/head'
import Link from 'next/link'

export default function ShowAlbums() {
    return (
        <div>
            <Head>
                <title>Play Album</title>
            </Head>

            <main>
                <p>
                    <Link href="/"><a>Home</a></Link>
                </p>
            </main>
        </div>
    )
}
