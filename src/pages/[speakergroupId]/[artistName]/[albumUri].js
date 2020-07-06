export default function PlayAlbum() {
    return null
}

export async function getServerSideProps(context) {
    return {
        props: {
            speakergroupId: context.params.speakergroupId,
            artistName: context.params.artistName,
            albumUri: context.params.albumUri
        }
    }
}