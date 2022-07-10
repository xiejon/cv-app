import React from "react";
import uniqid from "uniqid";

const EducationItem = ({ setEntries, entry }) => {
  const [isEditVisible, setIsEditVisible] = React.useState(false);
  const [editFormState, setEditFormState] = React.useState(entry);

  const editStyles = {
    display: isEditVisible ? "flex" : "none",
  };

  function handleEdit(e) {
    e.preventDefault();

    setEntries((prevEntries) =>
      prevEntries.map((prevEntry) => {
        return prevEntry === entry ? (prevEntry = editFormState) : prevEntry;
      })
    );
  }

  function handleDelete(e) {
    e.preventDefault();

    setEntries((prevEntries) =>
      prevEntries.filter((prevEntry) => prevEntry !== entry)
    );
  }

  return (
    <>
      <div
        className="entry"
        key={uniqid()}
        onClick={() => setIsEditVisible((prevBool) => !prevBool)}
      >
        <p>{entry.name}</p>
      </div>
      <form className="edit-form" style={editStyles}>
        <div className="name">
          <label htmlFor="name">School name</label>
          <input
            id="name"
            placeholder="Enter school/university name"
            value={editFormState.name}
            onChange={(e) =>
              setEditFormState((prevInput) => {
                return { ...prevInput, name: e.target.value };
              })
            }
          ></input>
        </div>
        <div className="degree">
          <label htmlFor="degree">Degree</label>
          <input
            id="degree"
            placeholder="Enter title of qualification"
            value={editFormState.degree}
            onChange={(e) =>
              setEditFormState((prevInput) => {
                return { ...prevInput, degree: e.target.value };
              })
            }
          ></input>
        </div>
        <div className="start-date">
          <label htmlFor="start-date">Start date</label>
          <input
            id="start-date"
            type="date"
            value={editFormState.startDate}
            onChange={(e) =>
              setEditFormState((prevInput) => {
                return { ...prevInput, startDate: e.target.value };
              })
            }
          ></input>
        </div>
        <div className="end-date">
          <label htmlFor="end-date">End date</label>
          <input
            id="end-date"
            type="date"
            value={editFormState.endDate}
            onChange={(e) =>
              setEditFormState((prevInput) => {
                return { ...prevInput, endDate: e.target.value };
              })
            }
          ></input>
        </div>
        <button className="edit-btn" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </>
  );
};

export default EducationItem;
