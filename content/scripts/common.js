//media query matches value
var mqWeb = window.matchMedia("screen and (min-width: 1376px)");
var mqPad = window.matchMedia("screen and (max-width: 991.98px)");
var mqMobile = window.matchMedia("screen and (max-width: 576.98px)");

//open modal event
function openModal(modalID) {
    var modalArea = $(".modal-area");
    var thisModal = $("#" + modalID)

    $("body").addClass("full");
    modalArea.not(thisModal).hide();
    thisModal.show();
}
//close modal event
function closeModal(modalID) {
    var thisModal = $("#" + modalID);

    $("body").removeClass("full");
    thisModal.hide();
}
//close modal event - when click backgrouond
function clickBackmodal() {
    var modalArea = $(".modal-area");
    var modalWrap = $("[class^=modal-wrap__]");

    modalArea.on("click", function(e){
        if (!$(e.target).closest(modalWrap).length) {
            $("body").removeClass("full");
            $(this).fadeOut(150);
        }
    });
}

//scroll to anchor event
function sclToAnchor(anchorArea) {
    var anchorTop = $('#' + anchorArea).offset().top;

    $("html, body").animate({
        scrollTop: anchorTop - 100
    }, 300);
}

//show & hide modal history event
function showHistory() {
    var historyCont = $(".modal-history-cont");
    var historyTab = $(".modal-history-tab");
    
    historyTab.on("click", function(e) {
        e.preventDefault();

        var thisHistoryData = $(this).attr("data-history");
        var thisHistory = $("#" + thisHistoryData);

        $(".modal-history-tab-list li").removeClass("active");
        $(this).parents("li").addClass("active");

        historyCont.not(thisHistory).hide();
        thisHistory.show();
    });
}

//delete center event
function deleteCenter(deleteBtn) {
    setTimeout(function(){
        $(deleteBtn).closest("li").remove();
    }, 50);
}