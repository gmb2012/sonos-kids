import Link from "next/link";

export default function ShowSonosGroups() {
    return (
        <div className="tile is-ancestor">
            <div className="tile is-parent is-6">
                <div className="tile is-child notification is-primary has-text-centered">
                    <div className="title">One</div>
                    More text
                    <div>
                        <Link href="/showArtists/[speakergroupId]" as="/showArtists/1">
                            <a>To /showArtists/[speakergroupId].js</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="tile is-parent is-6">
                <div className="tile is-child notification is-primary">Two</div>
            </div>
        </div>


    )
}