$(function(){


    $('button').click(function(){

        $.get('./playlist.txt',function(data){
            console.log(data);
            data = data.split("\n");
            data.forEach(element => {
                $('#list ul').append('<li>'+element+'</li>');
            });
        });


    });


});