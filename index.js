
const block = ({ kwargs, children }) => {
    return {
        children,
        readOnly: Boolean(kwargs.readOnly)
    };
};

module.exports = {
    blocks: {
        tonic: block,
        runkit: block
    }
};
