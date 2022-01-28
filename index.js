
let question = prompt ('Hello there');

if (question=='general kenobi') {
    alert ('you are a bold one')
} else {
    alert ('I find your lack of meme desturbing.')
}

function MPrompt() {
    console.log("hi")
    
    let Mecount = prompt('How many MEs do you want to see?');
    if (Mecount ==='') {
        alert('please enter a nuber between 1 and 3');
        MPrompt();   
    }
    if (Mecount == 3) {
        let counter = 0;
        while (counter <3) {
            document.getElementById('img').innerHTML += ('<img src="SnowMarcus.jpg">')
            counter++;
            console.log (counter);
        }
    }
}

 