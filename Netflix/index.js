$(".faq-item").click(function()
{
    $(this).children().next('.faq-question-expand-image').toggle();
    $(this).children().next('.faq-question-close-image').toggle();
    $(this).parent().find('.faq-answer').toggle();
});