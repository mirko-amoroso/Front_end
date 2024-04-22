// funzione che printa la quantità di stelle che clicchi
document.addEventListener('DOMContentLoaded',function(){
    var stella = document.querySelectorAll('.immagini_stella input');
    stella.forEach(function(star){
        star.addEventListener('click', function(){
            console.log('You rated this: ' + star.value);
        });
    });
});   