let randomColor;
function show(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
        .then(data => {
                        result(data);
                    })
}


function result(data)
{
    randomColor = Math.floor(Math.random()*16777215).toString(16);

    document.querySelector("body").style.backgroundColor=randomColor;
    document.getElementById("new-btn").style.color=randomColor;

    document.getElementById("quotes").innerHTML=`${data.content}`;
    document.getElementById("author").innerHTML=`-${data.author}`;

}
function change_color(){
    document.getElementById("new-btn").style.backgroundColor=randomColor;
    document.getElementById("new-btn").style.color= "black";

}
function alter_color(){
    document.getElementById("new-btn").style.backgroundColor= "black" ;
    document.getElementById("new-btn").style.color= randomColor ;

}