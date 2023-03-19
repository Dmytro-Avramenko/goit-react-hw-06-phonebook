import { ContactList } from './Phonebook/ContactList'
import { ContactForm } from './Phonebook/ContactForm'
import { Filter } from './Phonebook/Filter'

import s from '../components/App.module.css'

export function App(){
  return (
    <div className={s.container}>      
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />      
    </div>
  )
}