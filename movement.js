const element = document.querySelector("#cube");
const x4 = document.querySelector("#x4");
//console.log(cube);

class movement{
    constructor(){

    };
    positionHorizontally(zavolat,many){
        const a = zavolat+many;
        return a;
    }
    information(){
        const bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top;
        return offset;
    }
}
const _m = new movement;
const information = new movement(_m.information());


x4.addEventListener("click",function (){
    x4.style.display = "none";
    //x4.style.display = "none";    // enddddd nějak udělej potom
    element.animate([
        { top: _m.information()},
        { top: information.positionHorizontally(_m.information(),10)+"px"}
      ], {
        duration: 1000,
        iterations: 1,
        fill: "forwards"
      });
    
});

