const timeline2 = gsap.timeline({defaults: {ease: 'power1.out'}});

$(".menu-text").hover(function(){
    $(".menu-hide").css("overflow", "visible");  
    $(this).css("color", generateRandomColor());
    }, function(){
    $(this).css("color", "white");
});

var intervalId = setInterval(function() {
    $("#logo").css("color", generateRandomColor());
    $("#git-icon").css("color", generateRandomColor());
    $("#linkedin-icon").css("color", generateRandomColor());
    $("#facebook-icon").css("color", generateRandomColor());
    $("#instagram-icon").css("color", generateRandomColor());
}, 1500);

var intervalId2 = setInterval(function() {
    timeline2.fromTo('#static', {opacity: 0}, {opacity: 0.2, duration: 2});
    timeline2.fromTo('#static', {opacity: 0.2}, {opacity: 0, duration: 1});
}, 6000);

function generateRandomColor(){
    let r = 255 * Math.random() | 50;
    let g = 255 * Math.random() | 50;
    let b = 255 * Math.random() | 50;
    return 'rgb('+r.toString()+','+g.toString()+','+b.toString()+')';
}