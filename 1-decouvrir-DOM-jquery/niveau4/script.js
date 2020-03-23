var listOfMovie = [];

$(document).ready(function(){
  $('#refresh').click(function(){                 
    $('#list').html('');                         
    listOfMovie = [];                               
  
  $.get('./playlist.txt', function(data){         
      
    splitFile(data).forEach(element => {addMovie(createMovie(element[0], element[1], element[2]));    
    });
    listOfMovie.forEach(element => {$('#list').append(htmlDivElement(element));              
    createPlayCallback(element);
  })
  });
});
});

function htmlDivElement(movie){
  return '<div class="divFilm"><div class="divIndex">'+ movie.index + '</div><div class="divTitle">' + movie.name + '</div><div class="divLength">' + movie.length + '</div><div><button id="playButton'+ movie.index +'">Play</button></div></div>';
}

function createPlayCallback(movie){
  $('#playButton'+ movie.index).on('click', function(){
    console.log('Film en cour : ' + movie.name + ',  pour une durée de : ' + movie.length);
  });
}
 
function createMovie(i, n, l){
  var movie = {                                       
    index : i,
    name : n,
    length : l
  };

return movie;
}

function splitFile(data){ 
  data = data.split('\n');                            

  $.each(data, function(index, value){                
    data[index] = value.split(',');                   
  });

  return data;
}

function addMovie(m){
  listOfMovie.push(m);
}
    