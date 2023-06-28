import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectNoteById } from './NoteApiSlice'
import { selectAllUsers } from "../users/UserApiSlice"
import EditNoteForm from "./EditNoteForm"

const NewNoteForm = () => {
  const { id } = useParams()
  const note = useSelector(state => selectNoteById(state, id))
  const users = useSelector(selectAllUsers)
  const content = note && users ? <EditNoteForm note={note} users={users} /> : <p>Loading...</p>

  return content
}

export default NewNoteForm