import type { ReactElement } from "react";
import { Header } from "@jetbrains/kotlin-web-site-ui/out/components/header/header";
import "@jetbrains/kotlin-web-site-ui/out/components/header/header.module.pcss.js";

export default function AppHeader(): ReactElement {
    return <Header />;
}