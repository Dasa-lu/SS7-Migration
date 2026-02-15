import React, { useEffect, useState } from "react";

export default function Footer(props) {
    const [FooterImpl, setFooterImpl] = useState(null);

    useEffect(() => {
        let alive = true;

        (async () => {
            try {
                await import("@jetbrains/kotlin-web-site-ui/dist/footer.css");
            } catch (e) {
                // ignore
            }

            const mod = await import("@jetbrains/kotlin-web-site-ui/dist/footer.js");
            const Comp = mod.default ?? mod;

            if (alive) setFooterImpl(() => Comp);
        })();

        return () => {
            alive = false;
        };
    }, []);

    if (!FooterImpl) return null;
    return <FooterImpl {...props} />;
}