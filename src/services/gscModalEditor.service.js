// this service trigger when main form submit. or the main input changes?
// interval to see when the elements appear, and when the lyrics recived - turn off the interval.
// event to each line - react comp with hidden form, and submitn that comp when the line clikced. that will keep the events inside the react context. the form submit will call the lyrics and thats the next step.

export let linesInterval = ()=>{
    let interval = setInterval(() => {
        let lines = document.querySelectorAll(".gs-title");
        // console.log(lines)
        if (lines) {
            clearInterval(interval);
            lines.forEach((line, i) => {
                // console.log(line.innerText.includes("Lyrics"))
                if (line.innerText.includes("Lyrics")) {

                    line.innerText = line.innerText.replace('Lyrics | Musixmatch', " ");
                } else {
                    line.parentElement.parentElement.remove();
                }
    
            });
            
        }
    }, 500);
} 

// module.exports = { linesInterval:linesInterval };

// remove all the musixMatch words

// leave just the lines with Lyrics - and remove the word Lyrics also

// remove the link events from the lines, and add event listener to each one, must be connected to the react context somehow?