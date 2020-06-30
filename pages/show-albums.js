import Link from 'next/link'
import Layout from "../components/layout";
import LinkBuilder from "../components/link-builder";

export default function ShowAlbums() {
    return (
        <Layout pageId="showAlbums">
            <LinkBuilder pageId="playAlbum" />
        </Layout>
    )
}
