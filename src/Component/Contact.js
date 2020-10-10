import React, { Component } from "react";
 
class Contact extends Component {
  render() {

    const contactInputs ={
      backgroundColor: "#61dafb",
      height : "190px",
      padding: "30px"
    }

    const firstName={
      marginLeft: "20px",
      width: "250px",
      height: "20px"
    }

    const lastName={
      marginLeft: "23px",
      width: "250px",
      marginTop: "10px",
      height: "20px"
    }

    const email={
      marginLeft: "54px",
      width: "250px",
      marginTop: "10px",
      height: "20px"
    }

    const contactTo={
      marginLeft: "23px",
      width: "258px",
      marginTop: "10px",
      height: "30px",
    }

    const btnSubmit={
      backgroundColor: "#FFCC00",
      color: "black",
      width: "150px",
      height: "30px",
      marginTop: "20px",
      fontSize: "17px"
    }

    const btnReset={
      backgroundColor: "#efefef",
      color: "black",
      width: "80px",
      height: "30px",
      marginTop: "20px",
      marginLeft: "5px",
      fontSize: "17px"
    }


     
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>Let's keep in touch <a href="mailto:chenyaa89@gmail.com">contact me</a>.
        </p>
        <form>
          <div style={contactInputs}>
          <b><label>First name: </label></b>
          <input style={firstName} type="text"></input>
          <br />
          <b><label>Last name: </label></b>
          <input style={lastName} type="text"></input>
          <br />
          <b><label>Email: </label></b>
          <input style={email} type="email" className="email"></input>
          <br />
          <b><label>Contact to: </label></b>
          <select style={contactTo} name="cars" id="cars">
          <option value="Selcet">Selcet</option>
          <hr/>
          <option value="Chen">Chen</option>
          <option value="Shavit">Shavit</option>
          <option value="Ronen">Ronen</option>
          <option value="Yehudit">Yehudit</option>
          </select>
          <br />
          <input style={btnSubmit} type="submit" value="Send"></input>
          <input style={btnReset} type="reset" value="Reset"></input>
          </div>
        </form>
      </div>
    );
  }
}
 
export default Contact