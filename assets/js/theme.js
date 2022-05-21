function checkDemandID(){
    var demandID = localStorage.getItem("demandID");
    alert(demandID);
}

function checkBookedTime(){
    var bookedTime = localStorage.getItem("bookedTime");
    alert(bookedTime);
}
function checkPassengerCount(){
    var PassengerCount = localStorage.getItem("passengerCount");
    alert(PassengerCount);
}
function checkStart(){
    var start = localStorage.getItem("start");
    alert(start);
}
function checkEnd(){
    var end = localStorage.getItem("end");
    alert(end);
}

function cancelRequest() {
    localStorage.removeItem("bookedTime");
    localStorage.removeItem("passengerCount");
    localStorage.removeItem("start");
    localStorage.removeItem("end");
    localStorage.removeItem("demandID");
    localStorage.removeItem("userID");
    window.location.href ="index.html";
}
function generateUID()
{
    var uuid = Math.random().toString(36).slice(-6);
    return uuid;
}
