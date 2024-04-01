// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modals({ show, handleClose, selectedGame }) {
   return (
      <>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>{selectedGame ? selectedGame.title : "No Game Selected"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {selectedGame ? (
                  <div>
                     <p>{selectedGame.description}</p>
                     <p>Last Updated: {selectedGame.lastUpdated}</p>
                  </div>
               ) : (
                  <p>No game selected.</p>
               )}
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
