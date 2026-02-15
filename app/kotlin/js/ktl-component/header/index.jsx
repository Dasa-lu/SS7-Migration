import React, { useEffect, useState } from "react";
import {latestKotlinUrl} from "~/data/releases.ts";

export default function Header(props) {
    const [HeaderImpl, setHeaderImpl] = useState(null);

    useEffect(() => {
        let alive = true;

        (async () => {
            await import("@jetbrains/kotlin-web-site-ui/dist/header.css");
            const mod = await import("@jetbrains/kotlin-web-site-ui/dist/header");
            const Comp = mod.default ?? mod;

            if (alive) setHeaderImpl(() => Comp);
        })();

        return () => {
            alive = false;
        };
    }, []);

    if (!HeaderImpl) return null;
    return <HeaderImpl {...props} productWebUrl={latestKotlinUrl} />;
}