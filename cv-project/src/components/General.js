import React from "react";

const General = ({ update }) => {
  const [currentState, setCurrentState] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isVisible, setIsVisible] = React.useState(false);

  function changeVisible() {
    setIsVisible((prevBool) => !prevBool);
  }

  function updateInfo() {
    update((prevInfo) => {
      return {
        ...prevInfo,
        general: currentState,
      };
    });
  }

  const styles = {
    display: isVisible ? "flex" : "none",
  };

  return (
    <>
      <div className="category" onClick={changeVisible}>
        Personal Details
      </div>
      <div className="form" style={styles}>
        <div className="name">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            placeholder="Enter your first and last name"
            onChange={(e) =>
              setCurrentState((prevState) => {
                return { ...prevState, name: e.target.value };
              })
            }
          ></input>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Enter email"
            onChange={(e) =>
              setCurrentState((prevState) => {
                return { ...prevState, email: e.target.value };
              })
            }
          ></input>
        </div>
        <div className="phone">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            placeholder="Enter phone number"
            onChange={(e) =>
              setCurrentState((prevState) => {
                return { ...prevState, phone: e.target.value };
              })
            }
          ></input>
        </div>
        <button className="enter-btn" onClick={updateInfo}>
          Enter
        </button>
      </div>
    </>
  );
};

export default General;
