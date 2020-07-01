import ConfigFile from "../../config/config.json";

export default function usePage() {
    return ConfigFile.pages;
}