import ConfigFile from "../config/config.json"

class Config {
    static getPages() {
        return ConfigFile.pages;
    }

    static getPage(pageId) {
        return this.getPages().find(function(page) {
            return page.id == pageId;
        });
    }
}

export default Config;