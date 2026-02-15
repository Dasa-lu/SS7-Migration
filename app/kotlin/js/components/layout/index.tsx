import React from 'react';

import './index.scss';

export class Section extends React.Component<{ children: any, className: any }> {
    render() {
        let {children, className} = this.props;
        return <section className={'kto-layout-section' + ' ' + className}>
            {children}
        </section>
    }
}

class Container extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return <div className="kto-layout-container">
            {children}
        </div>
    }
}

export default Container