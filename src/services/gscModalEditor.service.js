// this service trigger when main form submit. or the main input changes?
// interval to see when the elements appear, and when the lyrics recived - turn off the interval.
// event to each line - react comp with hidden form, and submitn that comp when the line clikced. that will keep the events inside the react context. the form submit will call the lyrics and thats the next step.

import { callLyrics } from "./callLyrics";

window.onload = () => {
    const targetNode = document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0];
    const observerOptions = {
        childList: false,
        attributes: true,

        // Omit (or set to false) to observe only changes to the parent node
        subtree: false
    }

    function callback() {
        linesChange();
    }

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, observerOptions);
}


export let linesChange = () => {
    setTimeout(() => {
        let lines = document.querySelectorAll(".gs-title");

        if (lines) {
            lines.forEach((line, i) => {
                if (line.innerText.includes("Lyrics")) {
                    line.innerText = line.innerText.replace('| Musixmatch', " ");

                    line.addEventListener('click', () => {
                        console.log('clicked url')
                        callLyrics();
                    });

                } else if (!line.innerText.includes("Lyrics")) {

                    if (line.parentElement.parentElement.parentElement.className.includes('gsc-webResult')) {
                        line.parentElement.parentElement.parentElement.remove();
                    }

                }

            });

        }
    }, 50);
}

// leave just the lines with Lyrics - and remove the word Lyrics also

// remove the link events from the lines, and add event listener to each one, must be connected to the react context somehow?