import React from 'react';
import Calendar from 'react-calendar';

const CalendarView = ({tasks}) => {
    return (
        <div>
            <h3>Task Calendar</h3>
            <Calendar
                titleContent={({date, view}) =>
                    view === 'month' && tasks.some(task => new Date(task.dueDate).toDateString() === date.toDateString())
                        ? <p>Task Due</p>
                        : null
                }
            />
        </div>
    );
};

export default CalendarView;