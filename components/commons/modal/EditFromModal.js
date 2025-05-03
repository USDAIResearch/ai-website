import { Modal } from "flowbite-react";
import React from "react";

const EditFromModal = ({ modalOpen, setModalOpen, modalText, children }) => {
  return (
    <Modal
      show={modalOpen === "form-modal"}
      size="4xl"
      popup
      onClose={() => setModalOpen(undefined)}
    >
      <Modal.Header />
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default EditFromModal;
