var jumboHeight = $('.jumbotron').outerHeight();
function test(){
	alert("Hello!");
}
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});