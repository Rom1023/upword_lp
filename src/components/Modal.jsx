import React from 'react';
import '../../assets/stylesheets/modal.scss';

const Modal = ({ handleClose, show, infos }) => {
  const showHideClassName = show ? "container modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main col-xs-8 col-sm-3">
        <div>
          <img src="../../assets/photos/upword-illustration.png" alt="Welcome" />
        </div>
        <h3>Welcome {infos.name}!</h3>
        <p>Thanks for filling out the form. A confirmation email has been sent to your {infos.email !== undefined ? infos.email.match(/(?<=@)[\w-_]+/) : 'email'} acount</p>

        <button type="button" onClick={handleClose} className="modal-button">
          X
        </button>
      </section>
    </div>
  );
};

export default Modal;
