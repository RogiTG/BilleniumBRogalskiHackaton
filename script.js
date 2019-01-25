/* ZAD 1 CHOINKA wersja niestabilna bo tylko pół*/
function drawTreeBody(size){
var boo="";

for(let i=0;i<size;i++){
     for(let k=0;k<i;k++){
     boo +="#";
    }
console.log(boo);
boo="";
}
}

function drawTreeCore(height,widht){

var boo="";
    for(let i=0;i<widht;i++){
boo+="#";
}

for(let k=0;k<height;k++){
console.log(boo);

}
}

function drawTreeBottom(size){
    var boo="";
    for(let i=0;i<size;i++){
boo+="#";
}
console.log(boo);
}

function drawWholeTree(par1,par2,par3,par4){
    drawTreeBody(par1);
    drawTreeCore(par2,par3);
    drawTreeBottom(par4);
}

function drawWholeTreeWith1Param(par1){
    drawTreeBody(par1);
    drawTreeCore(1/10*par1,1/10*par1);
    drawTreeBottom(par1-1);
}

drawTreeBody(12);
drawTreeCore(3,3);
drawTreeBottom(5);


drawWholeTree(15,2,2,7);

drawWholeTreeWith1Param(15);