mouseevent="";
var last_x_pos,last_y_pos ;

canvas=document.getElementById("myCanvas");
cntx=canvas.getContext("2d");
color="black";
line_width=1;
radius=20;

canvas.addEventListener("mousedown" ,my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value ;
    line_width=document.getElementById("line_width").value ;
    radius=document.getElementById ("radius").value;
    mouseevent="mousedown";
}

canvas.addEventListener("mouseleave" ,my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}

canvas.addEventListener("mouseup" ,my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}

canvas.addEventListener("mousemove" ,my_mousemove);
function my_mousemove(e){
    current_x_pos = e.clientX - canvas.offsetLeft;
    current_y_pos = e.clientY - canvas.offsetTop;

    
    if(mouseevent=="mousedown"){
        cntx.beginPath();
        cntx.strokeStyle=color;
        cntx.lineWidth=line_width;    

        /*console.log("----------Last X and Y Cordinates ----------");
        console.log("X="+last_x_pos+" Y="+last_y_pos);
        cntx.moveTo(last_x_pos,last_y_pos);

        console.log("----------Current X and Y Cordinates ----------");
        console.log("X="+current_x_pos+" Y="+current_y_pos);
        cntx.lineTo(current_x_pos,current_y_pos);*/
        cntx.arc(current_x_pos,current_y_pos,radius,0,2*Math.PI);
        cntx.stroke();

    } 
    last_x_pos=current_x_pos;
    last_y_pos=current_y_pos;
}

function cleararea(){
    cntx.clearRect(0,0,canvas.width,canvas.height);
}