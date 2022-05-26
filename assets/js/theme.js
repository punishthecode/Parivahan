//vm tomcat ip address
        //base_url = "http://192.168.1.122:8080/pv/drt/demo";

        //windows tomcat ip address
        base_url = "http://localhost:8080/pv/drt/demo";

        //node ip address
        //base_url = "http://127.0.0.1:6900";


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
