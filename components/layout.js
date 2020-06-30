import Head from "next/head";

export default function Layout({ children, title}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <section>
                <h1>{title}</h1>
                {children}
            </section>
        </div>
    )
}