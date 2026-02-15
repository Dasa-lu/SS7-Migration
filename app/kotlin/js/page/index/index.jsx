import React from 'react';
import '@rescui/typography/lib/font-jb-sans-auto.css';
import hljs from 'highlight.js/lib/core';
import kotlin from 'highlight.js/lib/languages/kotlin';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('kotlin', kotlin);

import {ThemeProvider} from '@rescui/ui-contexts';

import HeaderSection  from "./header-section";
import {LatestFromKotlinSection} from './latest-from-kotlin-section/index';
import {WhyKotlinSection} from './why-kotlin-section/index.jsx';
import {UsageSection} from './usage-section/index.jsx';
import {StartSection} from './start-section/index.jsx';

import "./index.scss";
import "../../../css/grid.scss";

export function OverviewPageContent() {
    return <div className="overview-page">
        <HeaderSection/>
        <LatestFromKotlinSection/>
        <WhyKotlinSection/>
        <UsageSection/>
        <StartSection/>
    </div>
}

export default function OverviewPage() {
    return (
    <ThemeProvider theme="dark">
        <OverviewPageContent/>
    </ThemeProvider>
)};



