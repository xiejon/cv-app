import React from "react";
import uniqid from "uniqid";

const SkillItem = ({ setEntries, entry }) => {
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
          <label htmlFor="name">Skill name</label>
          <input
            id="name"
            placeholder="Enter skill name"
            value={editFormState.name}
            onChange={(e) =>
              setEditFormState((prevInput) => {
                return { ...prevInput, name: e.target.value };
              })
            }
          ></input>
        </div>
        <div className="skill-desc">
          <label htmlFor="skill-desc">Description</label>
          <textarea
            id="skill-desc"
            rows="2"
            placeholder="Enter description of skill"
            value={editFormState.desc}
            onChange={(e) =>
              setEditFormState((prevInput) => {
                return { ...prevInput, desc: e.target.value };
              })
            }
          ></textarea>
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

export default SkillItem;
