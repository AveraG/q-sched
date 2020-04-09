import React from 'react'
import Modal from './Modal'
import ToggleContent from './ToggleContent'

const ModalButton = () => (
  <div>
    <ToggleContent
      toggle={show => <button onClick={show}>Edit</button>} //eventually pass props
      content={hide => (
        <Modal>
          Edit Here<br/>
          <button onClick={hide}>Close</button>
        </Modal>
      )}
    />
  </div>
);

export default ModalButton;