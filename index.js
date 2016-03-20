
module.exports = {
    book: {
        assets: './assets',
        js: [
            "https://embed.tonicdev.com",
            "plugin.js"
        ]
    },
    blocks: {
        tonic: {
            process: function(block) {
                var readOnly = Boolean(block.kwargs.readOnly);
                var nodeVersion = '';
                if (block.kwargs.nodeVersion) {
                  nodeVersion = 'data-node-version="' + block.kwargs.nodeVersion + '"';
                }
                var className = 'pg-tonic';
                if (readOnly) className += ' readonly';

                return '<pre class="' + className + '"' + nodeVersion + '>' + block.body + '</pre>';
            }
        }
    }
};
