import { useEffect } from "react";
import { store } from "../../app/store";
import { notesApiSlice } from "../notes/NoteApiSlice";
import { usersApiSlice } from "../users/UserApiSlice";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    console.log("Subscribing");
    const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate());
    const users = store.dispatch(usersApiSlice.endpoints.getNotes.initiate());

    return () => {
      console.log("Unsubscribing");
      notes.unsubscribe();
      users.unsubscribe();
    };
  }, []);

  return <Outlet />;
};

export default Prefetch;
