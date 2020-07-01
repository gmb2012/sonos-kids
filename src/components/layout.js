import Head from "next/head";
import Config from "../helpers/config";
import Menu from "./menu";
import classNames from "classnames";

export default function Layout({ children, url }) {
    let page = Config.getPage(url);

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
    }
}