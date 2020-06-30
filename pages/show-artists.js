import Link from 'next/link'
import Layout from "../components/layout";
import LinkBuilder from "../components/link-builder";

export default function ShowArtists() {
    return (
        <Layout pageId="showArtists">
            <LinkBuilder pageId="showAlbums" />
        </Layout>
    )
}
