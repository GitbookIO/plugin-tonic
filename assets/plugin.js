require(["gitbook", "jQuery"], function(gitbook, $) {
    function bindNotebook() {
        var $pre = $(this);
        var source = $pre.html();
        var readOnly = $pre.hasClass('readonly');

        var $div = $('<div>');
        $pre.replaceWith($div);

        var notebook = Tonic.createNotebook({
            element: $div.get(0),
            source: source,
            readOnly: readOnly,
            onLoad: function(){}
        });
    }

    gitbook.events.bind("page.change", function() {
        $('.pg-tonic').each(bindNotebook);
    });
});