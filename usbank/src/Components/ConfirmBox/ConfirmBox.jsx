import React from "react";

const ConfirmBox = ({
  show = true,
  handleClose,
  title,
  description,
  handleOk,
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
            backgroundColor: "rgba(255,255,255,0.9)",
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
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">{description}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOk}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBox;
