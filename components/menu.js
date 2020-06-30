import Config from "../helpers/config";
import { useRouter } from "next/router"
import classNames from "classnames";

export default function Menu() {
    let tabs = [];

    console.log(useRouter().pathname)

    Config.getPages().forEach(function(page) {
        // check for active url
        let liClassNames = [];
        if (page.url == useRouter().pathname) {
            liClassNames.push("is-active");
        }

        tabs.push(
            <li key={page.id} className={liClassNames}>
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