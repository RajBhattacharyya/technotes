import { Link } from "react-router-dom"

const Welcome = () => {
  const date = new Date()
  const today = new Intl.DateTimeFormat("en-Us", { dateStyle: 'full', timeStyle: 'long',  timeZone: 'Asia/Kolkata'}).format(date)

  const content = (
    <section className="welcome">
        <p>{today}</p>
        <h1>Welcome!</h1>
        <p><Link to="/dash/notes">View techNotes</Link></p>
        <p><Link to="/dash/notes/new">Add New techNotes</Link></p>
        <p><Link to="/dash/users">View User Settings</Link></p>
        <p><Link to="/dash/users/new">Add New Users</Link></p>
    </section>
  )
  return content
}

export default Welcome