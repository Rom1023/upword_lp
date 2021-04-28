import React from 'react';
import '../../assets/stylesheets/modal.scss';

const Modal = ({ handleClose, show, name, email }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <img src="../../assets/photos/upword-illustration.png" alt="Welcome photo" />
        </div>
        <h3>Welcome {name}!</h3>
        <p>Thanks for filling out the form. A confirmation email has been sent to {email} </p>

        <button type="button" onClick={handleClose} className="modal-button">
          X
        </button>
      </section>
    </div>
  );
};

export default Modal;
