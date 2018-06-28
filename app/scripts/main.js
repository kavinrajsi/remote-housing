console.log('\'Allo \'Allo!');
$(document).ready(function() {

   	var
   	$body = $('body'),
    $menuLeft = $('#navbar'),
    $burgermenu = $('#nav-burgermenu'),
    $burgermenuIcon = $('.buger-menu-icon');

    $burgermenu.click(function() {
        $burgermenuIcon.toggleClass('active');
        $menuLeft.toggleClass('menu-drawer-open');
        $body.toggleClass('menu-open');
    });

});