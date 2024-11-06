import { API } from "../../Global";
import { ADD_NOTES, EDIT_NOTES, GET_NOTES } from "./Types";

export const getNotes = () => async (dispatch) => {
  try {
    const response = await fetch(`${API}/notes`);
    const data = await response.json();
    console.log(data);

    dispatch({
      type: GET_NOTES,
      payload: data,
    });
  } catch (error) {
    console.log("The error is", error);
  }
};

export const addNote = (note) => async (dispatch) => {
  try {
    const response = await fetch(`${API}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    const data = await response.json();
    console.log(data);

    dispatch({
      type: ADD_NOTES,
      payload: data,
    });
  } catch (error) {
    console.log("The error is", error);
  }
};

export const editNote = (note) => async (dispatch) => {
  try {
    const response = await fetch(`${API}/notes/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    const data = await response.json();
    console.log(data);

    dispatch({
      type: EDIT_NOTES,
      payload: data,
    });
  } catch (error) {
    console.log("The error is", error);
  }
};
