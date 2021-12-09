$(document).ready(function(){
    $(".value").click(function(){
        $("#result").val($("#result").val() + $(this).val())
    });
    $(".clear").click(function(){
        $("#result").val(" ")
    });
    $(".result").click(function(){
        $("#result").val(eval($("#result").val()))
    });
    //Jasurbek Yusufov
})