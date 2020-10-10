import React from "react"

function ClockTime(){
    
    const date = new Date(); // new Date(2020, 10, 3, 11); לבדוק לפי תאריך ושעה את השינוי
    const hours = date.getHours();
    let timeOfDay;

    const styleOfDateByTime={
        paddingTop: "10px",
        paddingBottom: "10px",
        textAlign: "center",
        fontSize: "20px",
        textAlign: "rigth",
        paddingLeft: "20px",
    }
    
    if(hours < 6){
        timeOfDay= "nigth"
        styleOfDateByTime.color = "#FFCC00"
        styleOfDateByTime.backgroundColor = "black"
    }else if (hours >= 6 && hours < 12){
        timeOfDay= "morning"
        styleOfDateByTime.color = "black"
        styleOfDateByTime.backgroundColor = "white"
    }else if (hours >= 12 && hours < 16){
        timeOfDay= "noon"
        styleOfDateByTime.color = "black"
        styleOfDateByTime.backgroundColor = "#61dafb"
    }else if (hours >= 16 && hours < 19){
        timeOfDay= "afternoon"
        styleOfDateByTime.color = "black"
        styleOfDateByTime.backgroundColor = "#61dafb"
    }else if (hours >= 19 && hours < 21){
        timeOfDay= "evening"
        styleOfDateByTime.color = "#FFCC00"
        styleOfDateByTime.backgroundColor = "black"
    }else{
        timeOfDay= "nigth"
        styleOfDateByTime.color = "#FFCC00"
        styleOfDateByTime.backgroundColor = "black"
    }

    return(
        <div>
            <div style={styleOfDateByTime}>Good {timeOfDay}
            </div>
            <hr></hr>
            </div>
    )
}

export default ClockTime