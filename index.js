$(".btn").click((e) => {
    e.preventDefault();
    var press =($(e.currentTarget).data("value"));

    $("#display").val(press);
});