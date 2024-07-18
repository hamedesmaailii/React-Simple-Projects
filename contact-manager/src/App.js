import React, {useState} from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
    const [contacts, setContacts] = useState([]);
    const [editContact, setEditContact] = useState(null);

    const addContact = (contact) => {
        if (editContact) {
            setContacts(
                contacts.map((c) => (c.id === editContact.id ? contact : c))
            );
            setEditContact(null);
        } else {
            setContacts([...contacts, contact]);
        }
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const editExistingContact = (contact) => {
        setEditContact(contact);
    };

    return (
        <div className="App">
            <h1>Contact Manager</h1>
            <ContactForm addContact={addContact} editContact={editContact}/>
            <ContactList
                contacts={contacts}
                deleteContact={deleteContact}
                editContact={editExistingContact}
            />
        </div>
    );
}

export default App;