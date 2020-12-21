
//prva kartica
document.getElementsByClassName("glavni-col")[0].addEventListener("mouseover", function() {
    document.getElementsByClassName("glavni-col")[0].style.backgroundColor = "green";
    document.getElementById("txt1").innerHTML="Misija";
   
    

});

document.getElementsByClassName("glavni-col")[0].addEventListener("mouseout", function() {
    document.getElementsByClassName("glavni-col")[0].style.backgroundColor = "white";
    document.getElementById("txt1").innerHTML="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
});

//druga kartica
document.getElementsByClassName("glavni-col")[1].addEventListener("mouseover", function() {
    document.getElementsByClassName("glavni-col")[1].style.backgroundColor = "green";
    document.getElementById("txt2").innerHTML="Plan";
});

document.getElementsByClassName("glavni-col")[1].addEventListener("mouseout", function() {
    document.getElementsByClassName("glavni-col")[1].style.backgroundColor = "white";
    document.getElementById("txt2").innerHTML="Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

});

//treca kartica
document.getElementsByClassName("glavni-col")[2].addEventListener("mouseover", function() {
    document.getElementsByClassName("glavni-col")[2].style.backgroundColor = "green";
    document.getElementById("txt3").innerHTML="Vizija";
});

document.getElementsByClassName("glavni-col")[2].addEventListener("mouseout", function() {
    document.getElementsByClassName("glavni-col")[2].style.backgroundColor = "white";
    document.getElementById("txt3").innerHTML="Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.";
});