function add(){
    var a= Number(document.getElementById('A').value);
    var b= Number(document.getElementById('B').value);
    var c=a+b;
    // document.getElementById('result').textContent = (c);
    var el=document.getElementById('result');
    el.value=c;
}

function sub(){
    var a= Number(document.getElementById('A').value);
    var b= Number(document.getElementById('B').value);
    var c=a-b;
    // document.getElementById('result').textContent = (c);
    var el=document.getElementById('result');
    el.value=c;
}

function multi(){
    var a= Number(document.getElementById('A').value);
    var b= Number(document.getElementById('B').value);
    var c=a*b;
    // document.getElementById('result').textContent = (c);
    var el=document.getElementById('result');
    el.value=c;
}

function div(){
    var a= Number(document.getElementById('A').value);
    var b= Number(document.getElementById('B').value);
    var c=a/b;
    // document.getElementById('result').textContent = (c);
    var el=document.getElementById('result');
    el.value=c;
}

function rem(){
    var a= Number(document.getElementById('A').value);
    var b= Number(document.getElementById('B').value);
    var c=a%b;
    // document.getElementById('result').textContent = (c);
    var el=document.getElementById('result');
    el.value=c;
}

function trigger1(){
    var x = [];
    a = prompt("Enter number of values : ");
    var i;
    for(i=0;i<a;i++)
    {
        x[i]=parseInt(prompt("Enter number " + (i+1)));
    }
    var j;
    var count;
    for(i=0;i<a;i++)
    {
        count=0;
        for(j=0;j<a;j++){
           if(x[i]>=x[j])
           count++;
        }
        if(count==a)
        largest=x[i]
    }

    alert("The largest number is " + largest);
}

function checkP() {
    var i1 = document.getElementById("i1").value;
    var reversedInput = i1.split("").reverse().join("");
    if (i1 === reversedInput) {
        alert("The number is a Palindrome");
    } else {
        alert("The number is not a Palindrome");
    }
}

function checkPr() {
    var i2 = document.getElementById("i2").value;
    let prime = true;
    for (let i = 2; i <= i2 / 2; i++) {
        if (i2 % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        alert("The number is Prime");
    } else {
        alert("The number is not Prime");
    }
}

function checkA() {
    var i2 = document.getElementById("i2").value;
    let armstrong = 0;
    for (let i = 0; i < i2.length; i++) {
        armstrong += Math.pow(parseInt(i2[i]), i2.length);
    }
    if (armstrong === parseInt(i2)) {
        alert("The number is an Armstrong number");
    } else {
        alert("The number is not an Armstrong number");
    }
}

function cC() {
    var i1 = document.getElementById("i1").value;
    var i2 = document.getElementById("i2").value;
    document.getElementById("result3").value = i1 + i2;
}

function bgc(){
    var colors =["red", "aqua", "lime", "magenta", "purple", "orange", "yellow" ,"black","rose","brown"];
    var j = Math.floor(Math.random()*7);
    var body = document.getElementsByTagName("body")[0];
    body.setAttribute('bgcolor', colors[j]);

}