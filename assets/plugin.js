require(["gitbook", "jQuery"], function(gitbook, $) {
    function bindNotebook() {
        var $div = $(this);
        var source = $div.html();
        $div.html('');

        console.log('bind tonic', source);
        var notebook = Tonic.createNotebook({
            element: $div.get(0),
            source: source,
            readOnly: $div.hasClass('readonly'),
            onLoad: function(){}
        });
    }

    gitbook.events.bind("page.change", function() {
        $('.pg-tonic').each(bindNotebook);
    });
});