
console.log("Your index,js file is linked correctly yay");


$(document).ready(function() {
    $("#button").hover(function() {
        $(this).css("background-color", "skyblue");
    }, function() {
        $(this).css("background-color", "cornflowerblue");
    });
});
