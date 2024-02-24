// node 2_Timer.js
(function(){
    let timeUnits = prompt("How much to count?");
    let interval = prompt("Log after how much interval?");

    let iid = setInterval(handleCalls, interval * 1000);

    handleCalls.orgTU = timeUnits;
    function handleCalls(){
        console.log(timeUnits + " left");
        timeUnits -= interval;

        if(timeUnits == 0){
            clearInterval(iid);
            alert(handleCalls.orgTU + " has been counted.");
        }
    }

    // function handleCalls(){
    //     console.log(timeUnits + " left");
    //     timeUnits -= interval;

    //     if(timeUnits == 0){
    //         clearInterval(iid);
    //         alert("Done");
    //     }
    // }

})();

// IIFE = immediately invoked function execution