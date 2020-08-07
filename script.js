$('.etrafli').click(function () {
    let $this = $(this);
    $this.toggleClass('etrafli');
    if ($this.hasClass('etrafli')) {
        $this.text('+ Ətraflı');
    } else {
        $this.text('- Daha az göstər');
    }
});
$('.more').click(function () {
    $(this).toggleClass('down');
});
$('.details').click(function () {
    $(this).toggleClass('up');
});