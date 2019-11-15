import { Component } from 'rreact';

export default class HTMLWrapper extends Component {
    constructor() {
        super();
        this.getMarkup.bind(this);
        this.state = { html: null };
    }

    getMarkup(prop) {
        return { __html: prop };
    }

    render() {
        return <div dangerouslySetInnerHTML={this.getMarkup(this.props.html)}></div>;
    }
};