import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  margin-top: 10px;
`;

const EventDetailsModal = ({ event, closeModal }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <h2>{event.title}</h2>
        <p>Date: {event.date}</p>
        <CloseButton onClick={closeModal}>Close</CloseButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default EventDetailsModal;
