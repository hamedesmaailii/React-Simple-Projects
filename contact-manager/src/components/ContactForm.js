import React, {useEffect, useState} from 'react';

function ContactForm({addContact, editContact}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (editContact) {
            setName(editContact.name);
            setPhone(editContact.phone);
        }
    }, [editContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone) return;

        const contact = editContact ? {...editContact, name, phone} : {id: Date.now(), name, phone};
        addContact(contact);

        setName('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">{editContact ? 'Update Contact' : 'Add Contact'}</button>
        </form>
    );
}

export default ContactForm;