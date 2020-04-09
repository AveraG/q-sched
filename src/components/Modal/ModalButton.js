import React from 'react'
import Modal from './Modal'
import ToggleContent from './ToggleContent'

const ModalButton = () => (
  <p>
    Click to reveal a secret:

    <ToggleContent
      toggle={show => <button onClick={show}>Open</button>}
      content={hide => (
        <Modal>
          There is no spoon.<br/>
          <button onClick={hide}>Close</button>
        </Modal>
      )}
    />
  </p>
);

export default ModalButton;