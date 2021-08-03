// Problem A -------------------------------------------------------
const bill = [275,28,430];
const tip = [];
const total = [];
console.log(bill.length);

// This Functions Calculates the 15% of the bill tip if 30<=bill<=300
function calcTip(bill){
    let tip = bill * 0.15;
    return tip
}

// Main loop finds checks all the values on the bill array and 
// allows the program to know when the condition is true
console.log('THIS IS PROBLEM A and D')
for (let i=0; i<bill.length;i++){
    let condition = Boolean(bill[i]>=30 && bill[i]<=300);
    switch(condition){
        case true:
            tip.push(calcTip(bill[i]))
            break;
        default:
        tip.push(bill[i]*0.20)
    }
    // Generate the total array 
    total.push(bill[i] + tip[i])
    // Display the result
    console.log(`    Bill  ${i+1}: ${bill[i]}
    Tip:  ${tip[i]}
    Total:${total[i]}`)
}

// Problem B-------------------------------------------------------
console.log(" ");
console.log("THIS IS PROBLEM B: Degrees C to F")

const celsius= 20;
const fahrenheit = 90;

function celsiusToFahrenheit(degreesc){
    const degreesf=(degreesc*(9/5))+32;
    return degreesf
}

function fahrenheightToCelsius(degreesf){
    const degreesc = (degreesf - 32) * 5/9;
    return degreesc;
}

console.log(`${celsius} Degree Celsius equals ${celsiusToFahrenheit(celsius)} Degree Fahrenheigt`);
console.log(`${fahrenheit} Degree Fahrenheight equals ${fahrenheightToCelsius(fahrenheit)} Degree calcius`);

// Problem C----------------------------------------------------
console.log(" ");
console.log("THIS IS PROBLEM C")

const nets1 = [44,23,71];
const nets2 = [85,54,41];

const knicks1 = [65, 54,49];
const knicks2 = [23,34,27];

const calcAverage = set=>{
    let average = 0; 
    // console.log("lenght " + set[i])
    for(let i=0; i<set.length;i++){
        average += set[i]
    }
    return average/set.length;
}

// Average Data sets: Nets 
const avgNets1 = calcAverage(nets1)
const avgNets2 = calcAverage(nets2)

console.log('Avg Nets data 1: '+avgNets1)
console.log('Avg Nets data 2: '+avgNets2)

// Average Data sets: Knicks 
const avgKnicks1 = calcAverage(knicks1)
const avgKnicks2 = calcAverage(knicks2)

console.log('Avg Knics data 1: '+avgKnicks1)
console.log('Avg Knics data 2: '+avgKnicks2)


function checkWinner(num1 , num2){
    if (num1 > num2){
        if (num1>(2*num2)){
            return num1; 
        }
        else{
            return 'none';
        }
    }else{
        if (num2>(2*num1)){
            return num2
        }else {
            return 'none;'
        }
    }
}

if (checkWinner(avgNets1, avgKnicks1) === avgNets1){
    console.log(`Data1: The Winner is Nets with ${avgNets1} points`)
}else if(checkWinner(avgNets1, avgKnicks1) === avgKnicks1){
    console.log(`Data1: The Winner is Knicks with ${avgKnicks1} points`)
}else{
    console.log(`Data1: There is no Winner`)
}
    
if (checkWinner(avgNets2, avgKnicks2) === avgNets2){
    console.log(`Data2: The Winner is Nets with ${avgNets2} points`)
}else if(checkWinner(avgNets2, avgKnicks2) === avgKnicks2){
    console.log(`Data2: The Winner is Knicks with ${avgKnicks2} points`)
}else{
    console.log(`Data2: There is no Winner`)
}

// Problem d----------------------------------------------------
console.log(" ");
console.log("THIS IS PROBLEM D")

