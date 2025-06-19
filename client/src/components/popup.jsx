import '../css/sarees.css';

const Modal = ({ onClose, children }) => {
  return (
    <div className="popup" onClick={() =>  onClose()}>
      <div className="popupDiv">
        <button className="closeBtn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
