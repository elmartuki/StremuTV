import React from "react";
import ModalDelate from "../admin/ModalDelate";

export default function ModalConfirm({ openModal, closeModal, onConfirm }) {
  return (
    <>
      <ModalDelate
        openModal={openModal}
        closeModal={closeModal}
        onConfirm={onConfirm}
      />
    </>
  );
}
