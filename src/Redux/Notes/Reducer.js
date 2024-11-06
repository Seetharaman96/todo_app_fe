import { ADD_NOTES, EDIT_NOTES, GET_NOTES } from "./Types";

const initialState = [];

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return action.payload;

    case ADD_NOTES:
      return [...state, action.payload];

    case EDIT_NOTES:
      return state.map((note) =>
        note.id === action.payload.id ? { ...note, ...action.payload } : note
      );

    default:
      return state;
  }
};

