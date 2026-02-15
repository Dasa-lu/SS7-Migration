export function HeaderPlaceholder() {
    return (
        <header
            className="ssrHeader"
            aria-label="Header placeholder"
            suppressHydrationWarning
        >
            <div className="ssrHeader__inner">
                <div className="ssrHeader__logo" />
                <nav className="ssrHeader__nav" aria-label="Primary navigation">
                    <span className="ssrHeader__link" />
                    <span className="ssrHeader__link" />
                    <span className="ssrHeader__link" />
                    <span className="ssrHeader__link" />
                </nav>
                <div className="ssrHeader__actions">
                    <span className="ssrHeader__btn" />
                    <span className="ssrHeader__btn ssrHeader__btnPrimary" />
                </div>
            </div>
        </header>
    );
}

export function FooterPlaceholder() {
    return (
        <footer
            className="ssrFooter"
            aria-label="Footer placeholder"
            suppressHydrationWarning
        >
            <div className="ssrFooter__inner">
                <div className="ssrFooter__cols">
                    <div className="ssrFooter__col">
                        <div className="ssrFooter__title" />
                        <div className="ssrFooter__item" />
                        <div className="ssrFooter__item" />
                        <div className="ssrFooter__item" />
                    </div>
                    <div className="ssrFooter__col">
                        <div className="ssrFooter__title" />
                        <div className="ssrFooter__item" />
                        <div className="ssrFooter__item" />
                        <div className="ssrFooter__item" />
                    </div>
                </div>
                <div className="ssrFooter__bottom">
                    <div className="ssrFooter__small" />
                    <div className="ssrFooter__small" />
                    <div className="ssrFooter__small" />
                </div>
            </div>
        </footer>
    );
}