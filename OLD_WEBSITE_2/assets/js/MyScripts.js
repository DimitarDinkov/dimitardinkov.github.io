/* Created by Dimitar Dinkov */

/* Background Slide */
//(function animateBG() {
//    $('.parallax-background-image').animate({
//        backgroundPosition: '+=1'
//    }, 12, animateBG);
//})();

/* Copying to Clipboard */
$('.copy-to-clipboard').click(function() {
    var copyText = ($(this).attr('copy-val'));
    
    copyToClipboard(copyText);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText);
});

// SOURCE: https://newbedev.com/navigator-clipboard-is-undefined
// return a promise
function copyToClipboard(textToCopy) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy);
    } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            // here the magic happens
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}