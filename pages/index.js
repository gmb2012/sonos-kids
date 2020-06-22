import Head from 'next/head'
import Link from 'next/link'

export default function ShowSonosGroups() {
  return (
    <div>
      <Head>
        <title>Show Sonos Groups</title>
      </Head>



      <main>
        <p>
          <Link href="/show-artists"><a>show artists</a></Link>
        </p>
      </main>
    </div>
  )
}
