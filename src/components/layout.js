import Head from "next/head";
import Menu from "./menu";
import classNames from "classnames";
import usePages from "../hooks/usePages";

export default function Layout({ children, url }) {
    let currentPage = usePages().currentPage;

    if(typeof currentPage !== 'undefined') {
        return (
            <div>
                <Head>
                    <title>Sonos Kids Controller - {currentPage.title}</title>
                </Head>

                <section className="section">
                    <div className="container">
                        <Menu />

                        <h1 className="title is-size-1 is-capitalized">
                            <span className="icon mr-3"><i className={ classNames("fad", currentPage.icon) }  aria-hidden="true"></i></span>
                            <span>{currentPage.title}</span>
                        </h1>
                        {children}
                    </div>
                </section>
            </div>
        )
    } else {
        return null;
    }
}