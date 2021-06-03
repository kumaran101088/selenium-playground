document.getElementById('primary').addEventListener('click', function (){
    alert('The primary button was clicked!');
});

document.getElementById('danger').addEventListener('dblclick', function() {
    alert('You double clicked DANGER!');
});

var x = 1;
document.getElementById('info-button').addEventListener('click', displayFooter);
function displayFooter () {
    if (x==1){
        document.getElementById('footer-content').style.visibility = 'visible';
        x = 2;
    }
    else{
        document.getElementById('footer-content').style.visibility = 'hidden';
        x = 1;
    }
    
}

document.getElementById('dark').addEventListener('contextmenu', function () {
    alert('You just right clicked me!');
});

document.getElementById('secondary').addEventListener('click', function () {
    document.getElementById('para4').style.visibility = 'visible';
});