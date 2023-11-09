import React, { useState, useEffect } from "react";
import axios from "axios";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch contacts from JSONPlaceholder API
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setContacts(response.data);
    });

    // Fetch user photos from the provided JSON URL
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
      setPhotos(response.data);
    });
  }, []);

  return (
    <div className="Contacts">
      <h1>My Contacts</h1>
      <table>
        {/* header for the table */}
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id}>
              <td> 
                <img
                src={photos[index] ? photos[index].thumbnailUrl : ""}
                alt={`Profile of ${contact.name}`}
                width="50"
                height="50"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.website}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Contacts;
