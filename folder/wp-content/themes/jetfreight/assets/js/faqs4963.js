/* ===========================Accordian============================================================== */
var accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find('.article-title');
    links.on('click', {
        el: this.el,
        multiple: this.multiple
    }, this.dropdown)
}

accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
        $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
    };
}
var accordion = new accordion($('.accordion-container'), false);