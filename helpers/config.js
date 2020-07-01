import ConfigFile from "../config/config.json"

class Config {
    static getPages() {
        return ConfigFile.pages;
    }

    static getPage(url) {
        return this.getPages().find(function(page) {
            return page.url == url;
        });
    }
}

export default Config;