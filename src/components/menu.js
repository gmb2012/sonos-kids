import { useRouter } from "next/router"
import classNames from "classnames";
import usePages from "../hooks/usePages";

export default function Menu() {
    let tabs = [];

    usePages().forEach(function(page) {
        // check for active url
        let liClassNames = [];
        if (page.url == useRouter().pathname) {
            liClassNames.push("is-active");
        }

        tabs.push(
            <li key={page.url} className={liClassNames}>
                <a href={page.url}>
                    <span className="icon"><i className={ classNames("fad", page.icon) }  aria-hidden="true"></i></span>
                    <span>{page.title}</span>
                </a>
            </li>
        );
    });

    return (
        <div className="tabs is-large">
            <ul>
                {tabs}
            </ul>
        </div>
    )
}