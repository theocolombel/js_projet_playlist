$(document).ready(function(){
    $('span').children('button').last().click(function(){
      var str = $('span').children('input').val();
      console.log(str);
    });
  });
