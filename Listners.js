//Deep about event Listners 

/*
whenever we attach a event Listner it takes memory.
*/
function attachEventListners() {
    document.getElementById("clickMe")
        .addEventListener("click", function xyz() {
            console.log("Button Clicked");
        })
}
