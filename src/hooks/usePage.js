import usePages from "./usePages";

export default function usePage(url) {
    return usePages().find(function(page) {
        return page.url == url;
    });
}