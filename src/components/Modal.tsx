// components/Modal.tsx
import React, { useRef } from "react";

type ModalProps = {
  id: string;
  title: string;
  content: string;
  onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({ id, title, content, onClose }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
      onClose?.();
    }
  };

  return (
    <dialog
      id={id}
      ref={modalRef}
      className="modal w-[800px] min-h-[200px] rounded-xl"
    >
      <div className="modal-box">
        <div className="header-modal w-full bg-blue-400 text-start px-10 py-2">
          <h3 className="font-bold text-lg p-4">{title}</h3>
        </div>
        <div className="content-modal min-h-[200px] bg-red-300 px-10 py-2 w-full text-start">
          <p className="p-4">{content}</p>
        </div>
        <div className="footer-modal justify-end">
          <div className="modal-action w-full bg-yellow-200 px-10 py-2 text-end">
            <button onClick={closeModal} className="btn bg-blue-400 p-4 rounded-xl">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
