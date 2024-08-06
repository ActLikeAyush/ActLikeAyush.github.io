function cmmdd(event) {
    event.preventDefault(); 
    var inp = document.getElementById('input1').value;
    var output = document.getElementById('cmdd'); 

    if (inp === 'help') {
        // 
        output.style.display='inline'; 
        // output.innerHTML = "<span>- <i class='fa fa-dollar'></i> </span>";
    }
}