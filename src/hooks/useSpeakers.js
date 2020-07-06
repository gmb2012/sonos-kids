import Config from "../../config/config.json";

export default function useSpeakers() {
    return {
        speakers: Config.speakers
    };
}