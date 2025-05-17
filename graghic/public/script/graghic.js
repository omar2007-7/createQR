const container = $("#container");
const urlInput = $("#url");
const submit = $("#submit");
const imagePlace = $("#imageQR");

submit.on("click", function () {
    if((imagePlace.attr("src") ==="") && (urlInput.val()!=="")){

        container.addClass("open");
    }
});
