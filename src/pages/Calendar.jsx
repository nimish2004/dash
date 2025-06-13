import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [
  { id: 1, title: "Meeting", date: "2025-06-10", description: "Discuss project status" },
  { id: 2, title: "Conference", date: "2025-06-15", description: "Annual tech conference" },
];

const CalendarPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (clickInfo) => {
    const event = events.find((e) => e.id.toString() === clickInfo.event.id);
    setSelectedEvent(event);
  };

  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="flex-1 overflow-y-auto pl-64">
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      
      {/* Blur background when modal open */}
      <div className={selectedEvent ? "filter blur-sm pointer-events-none" : ""}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
        />
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-transparent"
          onClick={closeModal} // close on backdrop click
          style={{ backdropFilter: "blur(10px)" }} // subtle blur overlay
        >
          <div
            className="bg-white rounded shadow-lg p-6 max-w-sm w-full relative z-10"
            onClick={(e) => e.stopPropagation()} // prevent modal click from closing
          >
            <h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>
            <p className="mb-1"><strong>Date:</strong> {selectedEvent.date}</p>
            <p className="mb-4">{selectedEvent.description}</p>
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
