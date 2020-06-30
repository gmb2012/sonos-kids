import Link from 'next/link';
import Config from "../helpers/config";

export default function LinkBuilder({ pageId }) {
    let page = Config.getPage(pageId);

    return <Link href={page.url}><a>{page.title}</a></Link>
}
