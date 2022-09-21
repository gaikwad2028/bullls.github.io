let a = document.getElementById("input");
let b = document.getElementById("input-1");
let c = document.getElementById("input-2");
let d = document.getElementById("input-3");
let e = document.getElementById("guess");
let f = document.getElementById("exist-1");
let g = document.getElementById("match-1");
let h = document.getElementById("checking");
let i = document.getElementById("k");
let mk = document.getElementById("number-5");
let audio=document.getElementById("ok");
let lo=document.getElementById("ok2");
console.log(lo)


function generate() {
    return Math.floor(1000 + Math.random() * 9000);
}

let ran_num = generate().toString();
console.log (ran_num)

let counter = 0
let increase=7

function match(user, secret) {
    let position = 0;
    for (var i = 0; i < user.length; i++) {
        if (user[i] == secret[i]) {
            position++
        }
    }
    return position;
}

function exist(user, secret) {
    let count = 0;
    for (let i of secret) {
        if (user.includes(i)) {
            count++
        }
    }
    return count
}


function clickme() {
    audio.play()
    let user = [a.value, b.value, c.value, d.value]
    let user_str = user.join('');
     
    let no_match = match(user, ran_num);
    let no_exist = exist(user, ran_num);
    
    setTimeout(() => {document.getElementById("input").value=""
                     document.getElementById("input-1").value=""
                     document.getElementById("input-2").value=""
                     document.getElementById("input-3").value=""
}, 200);
 

    if (no_match == 4 && no_exist == 4) {
        document.getElementById("hidden").style.visibility = "hidden";
        document.getElementById("right").style.display = "block"
        document.getElementById("right").style.textAlign = "center"
        document.getElementById("home").style.visibility = "visible"
    }

    else if (no_match != 4 && no_exist != 4 ) {
        document.getElementById(`guess-${counter}`).value = user_str;
        document.getElementById(`exist-${counter}`).value = no_exist;
        document.getElementById(`match-${counter}`).value = no_match;
        
    }

    // console.log( document.getElementById(`guess-${counter}`).value )


        
   counter++;


   if ( no_match != 4 && no_exist != 4 && counter==7){
    alert("game over loser"+ " " + ran_num)
   }

 
   
}

function clickus(){
    lo.play()
}




