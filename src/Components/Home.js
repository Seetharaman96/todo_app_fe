import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../Redux/Notes/Action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const notes = useSelector((state) => state.note);
  console.log(notes);

  return (
    <div>
      {notes.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Notes Loaded Successfully!</h1>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>{JSON.stringify(note)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
