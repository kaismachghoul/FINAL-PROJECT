
var scotland={link:'data/Scotland.jpg', name : 'SCOTLAND'}
var spain ={link:'data/Spain.jpg', name : 'SPAIN'} 

var easy=['data/France.jpg  ','data/Algeria.jpg','data/Belgium.jpg','data/Scotland.jpg','data/Spain.jpg']

var pays=['FRANCE','ALGERIA','BELGIUM','SCOTLAND','SPAIN']

var wales ={link:'data/Wales.jpg', name : 'WALES'}
var syria ={link:'data/Syria.jpg', name : 'SYRIA'}
var paraguay ={link:'data/Paraguay.jpg', name : 'PARAGUAY'}
var romania ={link:'data/Romania.jpg', name : 'ROMANIA'}
var panama = {link:'data/Panama.jpg', name : 'PANAMA'}

var medium = ['data/Wales.jpg','data/Syria.jpg','data/Paraguay.jpg','data/Romania.jpg','data/Panama.jpg']


var antigua ={link:'data/Antigua_and_Barbuda.jpg', name : 'Antigua and Barbuda.jpg'}
var brunei = {link:'data/Brunei.jpg', name : 'BRUNEI'}
var monaco = {link:'data/Monaco', name : 'MONACO'}
var belize = {link:'data/Belise.jpg', name : 'BELISE'}
var cooksIland = {link:'data/Cook_Islands.jpg', name : 'COOKS ILANDS'}
 
var hard = ['data/Belize.jpg','data/Bhutan.jpg','data/Antigua_and_Barbuda.jpg','data/Brunei.jpg','data/Monaco.jpg']



$(document).ready(function(){
// for (var i=0;i<easy.length;i++){
//     $('img').append()
// }
$('#button_flag').on("click",function(){ 
    $("#button_flag").text("Confirm")
})  
var countrieArr=pays
var  currentArray= easy
var score = 0
var max = 5
var count = 0
$('#button_flag').on("click",function(){ 
  $(".drapeau")[0].src = currentArray[count]
  if(count>=currentArray.length-1){
    count=0
    currentArray=medium
    // $("input[class='check-difficultie']:checked").val() ='medium'
  }     
  else {
    count=count+1
  }
  console.log("count",count)
})   

    $("#button_flag").click(function(){
        var guess = $("#box_flags").val()
        console.log("count response",count)

        console.log("guess",guess)
        console.log("countrieArr",countrieArr[count-1])
        if(guess.toUpperCase()===countrieArr[count-2]){
            console.log('pays',countrieArr[count-2])
            score++
            $('.label-score').text(score)


        }
        console.log("score",score);


    });
    $(".check-difficultie").click(function(){
        count= 0 
        var radioValue = $("input[class='check-difficultie']:checked").val() 
        if(radioValue==='easy'){         
            currentArray=easy
        }
        else if( radioValue==='medium'){
            currentArray=medium
        }else {
            currentArray=hard
        }
        console.log(radioValue);
        // if(radioValue){
        //     alert("Your are a - " + radioValue);
        // }
    });
    // console.log($('.highscore').text('13'))
});


// if (radioValue.toUpperCase()===countrieArr[count]){
//     score++
//     console.log(count)
//     console.log(score)        }
// else {
//     score=score
// }




// $('#button').on('click',function,(){




    // $('#button').on("click",function(){ 
    //     $(".drapeau")[0].src = medium[count]
    //     if(count>=medium.length-1){
    //       count=0
    //     }     
    //     else {
    //       count++
    //     }
    //   })
    // }


//     var count = 0
// $('#button').on("click",function(){ 
//   $(".drapeau")[0].src = easy[count]
//   if(count>=easy.length-1){
//     count=0
//   }     
//   else {
//     count++
//   }
// })




    
    