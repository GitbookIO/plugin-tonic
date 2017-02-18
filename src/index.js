/* global RunKit */
const classNames = require('classnames');
const GitBook = require('gitbook-core');
const { React } = GitBook;

/**
 * Block to render a notebook from runkit.
 * @type {ReactClass}
 */
const RunKitNotebook = React.createClass({
    propTypes: {
        readOnly: React.PropTypes.bool,
        children: React.PropTypes.node
    },

    componentDidMount() {
        const { readOnly } = this.props;
        const { inner } = this.refs;

        RunKit.createNotebook({
            element: inner,
            readOnly,
            source: inner.textContent
        });
    },

    render() {
        const { children } = this.props;
        const className = classNames(
            'RunKitNotebook'
        );

        return (
            <div className={className}>
                <GitBook.ImportScript src="https://embed.runkit.com" />
                <div ref="inner" className="RunKitNotebook-Inner">{children}</div>
            </div>
        );
    }
});

module.exports = GitBook.createPlugin({
    activate: (dispatch, getState, { Components }) => {
        dispatch(Components.registerComponent(RunKitNotebook, { role: 'block:runkit' }));
        dispatch(Components.registerComponent(RunKitNotebook, { role: 'block:tonic' }));
    }
});
