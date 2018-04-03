$("#boarding").click(function (evt) {
    $("#need").text("Cat Boarding near")
    $("#boarding").css("borderColor", "#ce8621 #a8a8a8 #a8a8a8 #a8a8a8")
    $("#house").css("borderColor", "#a8a8a8")
    $("#visit").css("borderColor", "#a8a8a8")
})

$("#house").click(function (evt) {
    $("#need").text("House Sitting near")
    $("#house").css("borderColor", "#ce8621 #a8a8a8 #a8a8a8 #a8a8a8")
    $("#boarding").css("borderColor", "#a8a8a8")
    $("#visit").css("borderColor", "#a8a8a8")
})

$("#visit").click(function (evt) {
    $("#need").text("Drop-In Visits near")
    $("#visit").css("borderColor", "#ce8621 #a8a8a8 #a8a8a8 #a8a8a8")
    $("#boarding").css("borderColor", "#a8a8a8")
    $("#house").css("borderColor", "#a8a8a8")
})

$("#daycare").click(function (evt) {
    $("#need").text("Kitten Day Care near")
    $("#daycare").css("borderColor", "#ce8621 #a8a8a8 #a8a8a8 #a8a8a8")
    $("#walking").css("borderColor", "#a8a8a8")
})

$("#walking").click(function (evt) {
    $("#need").text("Cat Walking near")
    $("#walking").css("borderColor", "#ce8621 #a8a8a8 #a8a8a8 #a8a8a8")
    $("#daycare").css("borderColor", "#a8a8a8")
})

$("#s").click(function (evt) {
    $("#s").css("borderColor", "#ce8621")
    $("#m").css("borderColor", "#a8a8a8")
    $("#l").css("borderColor", "#a8a8a8")
})
$("#m").click(function (evt) {
    $("#m").css("borderColor", "#ce8621")
    $("#s").css("borderColor", "#a8a8a8")
    $("#l").css("borderColor", "#a8a8a8")
})
$("#l").click(function (evt) {
    $("#l").css("borderColor", "#ce8621")
    $("#s").css("borderColor", "#a8a8a8")
    $("#m").css("borderColor", "#a8a8a8")
})