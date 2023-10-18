import { useState } from 'react';

export default function UserDetails({ item }) {
  const [editable, setEditable] = useState(false);
  const [Name, setName] = useState(item.Name);
  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Dispositivo</label>
        <input
          id='Name'
          value={Name}
        />
      </form>
    </div>
  );
}
