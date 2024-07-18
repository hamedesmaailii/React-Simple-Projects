import React from 'react';

function ContactList({contacts, deleteContact, editContact}) {
    return (
        <div className="contact-list">
            {contacts.map(contact => (
                <div key={contact.id} className="contact-item">
                    <span>{contact.name} - {contact.phone}</span>
                    <button onClick={() => editContact(contact)}>Edit</button>
                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ContactList;