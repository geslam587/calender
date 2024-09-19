import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddEventForm from './AddEventForm';
import EditEventForm from './EditEventForm';
import EventDetailsModal from './EventDetailsModal';
import FilterEvents from './FilterEvents';

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 20px;
`;

const Day = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const Event = styled.div`
  background-color: #f0f0f0;
  margin: 5px 0;
  padding: 5px;
  cursor: pointer;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px 10px;
`;

const Calendar = () => {
  const [days, setDays] = useState([]);
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    // Generate days for the current month
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setDays(daysArray);
  }, []);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map(event => (event.date === updatedEvent.date && event.title === updatedEvent.title) ? updatedEvent : event));
  };

  const deleteEvent = (eventToDelete) => {
    setEvents(events.filter(event => event !== eventToDelete));
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  const closeEditForm = () => {
    setEditingEvent(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const filteredEvents = filterCategory === 'All' ? events : events.filter(event => event.category === filterCategory);

  return (
    <div>
      <AddEventForm addEvent={addEvent} />
      <FilterEvents category={filterCategory} setCategory={setFilterCategory} />
      {editingEvent && (
        <EditEventForm
          event={editingEvent}
          updateEvent={updateEvent}
          closeForm={closeEditForm}
        />
      )}
      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          closeModal={closeModal}
        />
      )}
      <CalendarContainer>
        {days.map(day => (
          <Day key={day}>
            {day}
            {filteredEvents
              .filter(event => new Date(event.date).getDate() === day)
              .map((event, index) => (
                <Event key={index}>
                  <DeleteButton onClick={() => deleteEvent(event)}>X</DeleteButton>
                  <div onClick={() => handleEventClick(event)}>{event.title}</div>
                </Event>
              ))}
          </Day>
        ))}
      </CalendarContainer>
    </div>
  );
};

export default Calendar;
