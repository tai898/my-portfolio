const user = {
    choices: [
        "愛知淑徳大学", 
        "ちいかわのモモンガ集め,温泉・サウナ", 
        "パピコを食べること", 
        "パズル",
    ]
}


const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")
const result3 = document.getElementById("result3")
const result4 = document.getElementById("result4")



for (let i = 1; i < 5;i++) {
    button[i].onclick = function () {
        result[i].textContent = user.choices[i];
    };
}

