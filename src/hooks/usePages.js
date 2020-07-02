import { useRouter } from "next/router";
import Config from "../../config/config.json";

export default function usePages(pageUrl) {
    const router = useRouter();
    const pageToFetch = pageUrl || router.pathname;

    console.log(router);

    function getCurrentRoute(pathname) {
        return Config.pages.find(p => p.url === pathname);
    }
    return {
        currentPage: getCurrentRoute(pageToFetch),
        pages: Config.pages
    };
}