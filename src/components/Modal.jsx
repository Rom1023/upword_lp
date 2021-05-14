import React from 'react';
import '../../assets/stylesheets/modal.scss';

const Modal = ({ handleClose, show, name, email }) => {
  const showHideClassName = show ? "container modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main col-xs-8 col-sm-3">
        <div>
          <img src="../../assets/photos/upword-illustration.png" alt="Welcome photo" />
        </div>
        <h3>Welcome {name}!</h3>
        <p>Thanks for filling out the form. A confirmation email has been sent to your {email.match(/(?<=@)[\w-_]+/)} account</p>

        <button type="button" onClick={handleClose} className="modal-button">
          X
        </button>
      </section>
    </div>
  );
};

export default Modal;
