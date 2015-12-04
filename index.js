
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
                var className = 'pg-tonic';
                if (readOnly) className += ' readonly';

                return '<div class="' + className + '">' + block.body + '</div>';
            }
        }
    }
};
