const radius = [4, 5, 6, 2, 3];

const area = function (radius){
    return Math.PI * radius * radius;
}

function calculate(radius, logic){
    const output = [];
    for(let i=0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
// this is like the map method but we are manually doing it 


//below is the example of map method for the same example
function calculateArea(x){
   return x.map(area);
}
console.log(calculateArea(radius))