import { useDispatch, useSelector } from "react-redux";
import { setDeleteContacts } from '../../redux/contactsSlice'
import { nanoid } from 'nanoid'

export const ContactList = () => {

    const contacts = useSelector(state => state.contacts);
    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();

    function onDelete(index) {
        dispatch(setDeleteContacts(index))
    }

    function findContact () {
        return (contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase())
    ))
    }
    
    const contactsData = findContact()

    return (
        <ul>
            {contactsData.map(({ name, number }, index) =>
                <li key={nanoid()}>
                    <span>{name} : {number}</span>

                    <button
                        type='button'
                        onClick={() => onDelete(index)}
                        key={index}
                    >Delete
                    </button>
                </li>
            )}            
        </ul>       
    )
}