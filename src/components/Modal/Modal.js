import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => (
  ReactDOM.createPortal(
    <aside className="modal">
      {children}
    </aside>,
    document.body
  )
);

export default Modal;

// const App = () => (
//   <p>
//     Click to reveal a secret:

//     <ToggleContent
//       toggle={show => <button onClick={show}>Open</button>}
//       content={hide => (
//         <Modal>
//           There is no spoon.<br/>
//           <button onClick={hide}>Close</button>
//         </Modal>
//       )}
//     />
//   </p>
// );

// ReactDOM.render(<App/>, document.getElementById('app'));
