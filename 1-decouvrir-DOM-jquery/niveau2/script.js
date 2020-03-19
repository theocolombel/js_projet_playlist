var listOfMovie = [];
$(document).ready(function(){






    $('button').click(function(){
        $('#list ul').html('');   
        listOfMovie = [];           
        $.get('./playlist.txt',function(data){  

            splitFile(data).forEach(element => {
                $('#list ul').append(htmlDivElement(element));
                listOfMovie.push(element);
            });
            console.log(listOfMovie);   
        });      
    });
});


function htmlDivElement(name){

    return '<div class="divFilm"><h3>'+name+'</h3></div>';
}

function splitFile(data){


    return data.split('\n');

}