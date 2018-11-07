var numero1=[1,2,3,4,5,6];
var numero2=[1,2,3,4,5,6];
var numero3=[1,2,3,4,5,6];
var numero4=[1,2,3,4,5,6];
var numero5=[1,2,3,4,5,6];
var numero6=[1,2,3,4,5,6];

var color1=["blue","yellow","pink","red","green","white"];
var color2=["white","blue","yellow","pink","red","green"];
var color3=["green","white","blue","yellow","pink","red"];
var color4=["red","green","white","blue","yellow","pink"];
var color5=["pink","red","green","white","blue","yellow"];
var color6=["yellow","pink","red","green","white","blue"];

var long1=numero1.length;
var long2=numero2.length;
var long3=numero3.length;
var long4=numero4.length;
var long5=numero5.length;
var long6=numero6.length;



function iniciaTablero(){
for (var i = 0; i < long1; i++) {

console.log(`${numero1[i]} ${color1[i]}`);

    }
for (var i = 0; i < long2; i++) {
console.log(`${numero2[i]} ${color2[i]}`);

    }
for (var i = 0; i < long3; i++) {
console.log(`${numero3[i]} ${color3[i]}`);

    }
for (var i = 0; i < long4; i++) {
console.log(`${numero4[i]} ${color4[i]}`);

    }
for (var i = 0; i < long5; i++) {
console.log(`${numero5[i]} ${color5[i]}`);

    }
for (var i = 0; i < long6; i++) {
console.log(`${numero6[i]} ${color6[i]}`);

    }
}
iniciaTablero();
