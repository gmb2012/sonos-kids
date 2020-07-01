import Link from 'next/link';
import Config from "../helpers/config";

export default function LinkBuilder({ url }) {
    let page = Config.getPage(url);

    return <Link href={page.url}><a>{page.title}</a></Link>
}
