import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event, Goal, Task } from '../types';

interface CalendarState {
  events: Event[];
  goals: Goal[];
  selectedGoal: string | null;
}

const initialState: CalendarState = {
  events: [],
  goals: [
    {
      id: '1',
      title: 'Learn',
      color: '#FF5733',
      tasks: [
        { id: '1', title: 'AI based agents', goalId: '1' },
        { id: '2', title: 'MLE', goalId: '1' },
        { id: '3', title: 'DE related', goalId: '1' },
        { id: '4', title: 'Basics', goalId: '1' },
      ],
    },
    {
      id: '2',
      title: 'Health',
      color: '#33FF57',
      tasks: [
        { id: '5', title: 'Morning Exercise', goalId: '2' },
        { id: '6', title: 'Meditation', goalId: '2' },
      ],
    },
  ],
  selectedGoal: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action: PayloadAction<Event>) => {
      const index = state.events.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter((e) => e.id !== action.payload);
    },
    setSelectedGoal: (state, action: PayloadAction<string | null>) => {
      state.selectedGoal = action.payload;
    },
  },
});

export const { addEvent, updateEvent, deleteEvent, setSelectedGoal } = calendarSlice.actions;
export default calendarSlice.reducer;