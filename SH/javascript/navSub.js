function openNav() {
    document.getElementById("mySidenav").style.width = "340px";
}

function closeNav() {

    document.getElementById("mySidenav").style.width = "0";
}

$(".storeList li").click(function () {
    $('.storeList .active').removeClass();
    $(this).addClass("active");
});
