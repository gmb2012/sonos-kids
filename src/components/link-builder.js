import Link from 'next/link';
import usePage from "../hooks/usePage";

export default function LinkBuilder({ url }) {
    let page = usePage(url);

    return <Link href={page.url}><a>{page.title}</a></Link>
}
