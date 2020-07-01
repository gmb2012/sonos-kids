import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-pro/css/all.min.css';
import '../styles/global.css';
import LinkBuilder from "../components/link-builder";
import Layout from "../components/layout";

export default function App({Component, pageProps, router}) {
    return (
        <Layout url={router.route}>
            <Component {...pageProps} />
        </Layout>
    )
}