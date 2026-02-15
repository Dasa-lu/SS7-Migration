import type { Route } from "./+types/home";
import OverviewPage from "app/kotlin/js/page/index/";

export function meta() {
    return [
        { title: "Kotlin Programming Language" },
        { name: "description", content: "Kotlin is a modern programming language..." },
    ];
}

export default function Home() {
  return <OverviewPage />;
}
