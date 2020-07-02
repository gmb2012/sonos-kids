import Link from "next/link";

export default function ShowSonosGroups() {
    return (
        <div className="tile is-ancestor">
            <div className="tile is-parent is-6">
                <div className="tile is-child notification is-primary has-text-centered">
                    <div className="title">One</div>
                    More text
                    <Link href="/show-artists/[speakergroupId]" as="/show-artists/1">
                        <a>Next Page</a>
                    </Link>
                </div>
            </div>
            <div className="tile is-parent is-6">
                <div className="tile is-child notification is-primary">Two</div>
            </div>
        </div>


    )
}