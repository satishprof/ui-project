import React from "react";

const ConfirmBox = ({
  show = true,
  handleNoBtn,
  title,
  description,
  handleYesBtn,
}) => {
  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
    >
      <div
        className="modal-backdrop"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      ></div>
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal-content"
          style={{
            backgroundColor: "rgba(263,263,263,0.9)",
            color: "#000",
            zIndex: 10000,
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleNoBtn}
            ></button>
          </div>
          <div className="modal-body">{description}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleNoBtn}
            >
              No
            </button>
            <button
              type="button"
              style={{ backgroundColor: "#3498db" }}
              className="btn"
              onClick={handleYesBtn}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBox;
