console.log(words);
let addword = document.querySelector(".data h2");
let addquestion = document.querySelector(".data p span");
let input = document.querySelector("#input");
let refresh = document.querySelector("#refresh");
let check = document.querySelector("#check");
let time = document.querySelector(".timer");


console.log(time);
let answerquestion, timer;

let addtime = maxtime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxtime > 0) {
            maxtime--;
            return time.innerHTML = maxtime;
        }
        alert("end time try again");
        game();
    }, 1000);

}

let game = () => {
    addtime(30);
    //select random word in array
    let randomword = words[Math.floor(Math.random() * words.length)];
    let addarray = randomword.word.split("");

    //loop random letters word
    for (let i = addarray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [addarray[i], addarray[j]] = [addarray[j], addarray[i]];
    }
    //add words in padge
    addword.innerHTML = addarray.join("");
    addquestion.innerHTML = randomword.hint;
    answerquestion = randomword.word.toLowerCase();
    input.setAttribute("maxlength", answerquestion.length);
    input.value = "";

    console.log(randomword);
    console.log(addarray);

}
game();

const checkgame = () => {
    let checkinput = input.value.toLowerCase();
    console.log(checkinput);
    //checkinput.toLocaleLowerCase();
    if (!checkinput) return alert("please add value the answer");

    if (checkinput !== answerquestion) return alert("OPPS try again");

    alert("congratulation is a correct word");

    game();
}

refresh.addEventListener("click", game);
check.addEventListener("click", checkgame);