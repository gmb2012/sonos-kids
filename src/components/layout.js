import Head from "next/head";
import Menu from "./menu";
import classNames from "classnames";
import usePage from "../hooks/usePage";

export default function Layout({ children, url }) {
    let page = usePage(url);

    if(typeof page !== 'undefined') {
        return (
            <div>
                <Head>
                    <title>Sonos Kids Controller - {page.title}</title>
                </Head>

                <section className="section">
                    <div className="container">
                        <Menu />

                        <h1 className="title is-size-1 is-capitalized">
                            <span className="icon mr-3"><i className={ classNames("fad", page.icon) }  aria-hidden="true"></i></span>
                            <span>{page.title}</span>
                        </h1>
                        {children}
                    </div>
                </section>
            </div>
        )
    } else {
        return;
    }
}