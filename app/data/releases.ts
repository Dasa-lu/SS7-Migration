import YAML from "yaml";
import releasesRaw from "./releases.yml?raw";

type ReleasesYml = {
    latest: {
        version: string;
        url?: string;
        notes_url?: string;
        [key: string]: unknown;
    };
    [key: string]: unknown;
};

const parsed = YAML.parse(releasesRaw) as ReleasesYml;

export const latestKotlinVersion = parsed?.latest?.version ?? "";
export const latestKotlinUrl = parsed?.latest?.url ?? "";