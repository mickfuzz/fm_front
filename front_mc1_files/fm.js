$(function() {
    // Apply btn class to all submit inputs including any in reading_room:
    $("input[type='submit']").addClass('btn btn-default');
    put_focus();
});

function put_focus() {
    var $inputs = $("input, select, textarea");
    // Lose any inputs that are hidden, or added by django-honeypot
    $inputs = $inputs.not("input[type='hidden']");
    $inputs = $inputs.not("input[name='descriptor']");
    $inputs.first().focus();
}
