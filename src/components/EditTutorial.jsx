import axios from "axios";
import React, { useEffect, useState } from "react";

const EditTutorial = ({ item, getTutorials }) => {
  console.log(item);

  const { id, title: oldTitle, description: oldDescription } = item;
  console.log(oldTitle, oldDescription);

  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);
  console.log(title);
  console.log(description);

  const handleEdit = (e) => {
    e.preventDefault();
    editTutorial(id, title, description);
    // setTitle("")
    // setDescription("")
  };
  //didUpdate
  useEffect(() => {
    setTitle(oldTitle);
    setDescription(oldDescription);
  }, [oldTitle, oldDescription]);

  const editTutorial = async ({ id, title, description }) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

    try {
      await axios.put(`${BASE_URL}${id}/`, { title, description });
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div>
      <div className="modal" tabIndex={-1} id="edit-tutor">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter your title"
                  value={title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  placeholder="Enter your Description"
                  value={description || ""}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
