$(document).ready(function() {
    $("#mycarousel").carousel({ interval: 2000});
    $("#mycarousel-button").click(function() {
        if($("#mycarousel-button").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#mycarousel-button").children("span").removeClass("fa-pause");
            $("#mycarousel-button").children("span").addClass("fa-play");    
        }
        else if($("#mycarousel-button").children("span").hasClass("fa-play")) {
            $("#mycarousel").carousel('cycle');
            $("#mycarousel-button").children("span").removeClass("fa-play");
            $("#mycarousel-button").children("span").addClass("fa-pause");    
        }
        
    });
});