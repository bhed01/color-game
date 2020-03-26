const squares=document.getElementsByClassName("square");
const header=document.querySelector("header h1");

(function(){
    let n=6;
    let colors=refresh(n);
    for(let i=0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor !== colorToFind.textContent){
                this.classList.add("hideSquare");
                response.textContent="Try Again!";
            }
            else{
                response.textContent="Correct!";
                header.style.backgroundColor=colorToFind.textContent;
                newColor.textContent="Play Again?"
                for(var j=0; j<colors.length; j++){
                    squares[j].style.backgroundColor=colorToFind.textContent;
                    squares[j].classList.remove("hideSquare");
                }
            }
        });
    }

    newColor.addEventListener("click", function(){
        colors=refresh(n);
        this.textContent="New Colors";
    });

    easy.addEventListener("click", function(){
        colors=refresh(3);
        lastContainer.classList.add("hide");
        this.classList.add("active");
        hard.classList.remove("active");
    });
    
    hard.addEventListener("click", function(){
        colors=refresh(6);
        lastContainer.classList.remove("hide");
        easy.classList.remove("active");
        this.classList.add("active");
    });
})();

function refresh(n){
    let colors=randomColors(n);
    let selectedColor=randomSelector(colors);
    response.textContent="";
    for(let i=0; i<colors.length; i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].classList.remove("hideSquare");
    }
    colorToFind.textContent=selectedColor;
    
    header.style.backgroundColor="rgb(20, 130, 200)";
    return colors;
}

function randomColors(n){
    var color=[];
    for(var i=0; i<n; i++){
        color.push(
            "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")"
            );
    }
    return color;
}

function randomSelector(colors){
    return colors[Math.floor(Math.random()*colors.length)];
}