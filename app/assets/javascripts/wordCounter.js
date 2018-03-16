ready = function() {
$(document).on('turbolinks:load', function(){

    counter = function() {
        var value = $('#section_text').val();

        if (value.length == 0) {
            $('#wordCount').html(0);
            $('#totalChars').html(0);
            $('#charCount').html(0);
            $('#charCountNoSpace').html(0);
            return;
        }

        var regex = /\s+/gi;
        var wordCount = value.trim().replace(regex, ' ').split(' ').length;
        var totalChars = value.length;
        var charCount = value.trim().length;
        var charCountNoSpace = value.replace(regex, '').length;

        $('#wordCount').html(wordCount);
        $('#totalChars').html(totalChars);
        $('#charCount').html(charCount);
        $('#charCountNoSpace').html(charCountNoSpace);
    };

    $(document).ready(function() {
        $('#count').on('click',(counter));
        $(document).on('change keydown keypress keyup blur focus','#section_text',(counter));

    });
});

};
$(document).ready(ready)
$(document).on('page:load', ready)