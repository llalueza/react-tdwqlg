import React, { useState } from 'react';

export default function MenuItem(props) {
  const [isEditing, setIsEditing] = useState(0);

  const handleSave = () => {
    setIsEditing(0);

    if (props.handleSaved) {
      props.handleSaved();
    }
  };

  function handleEdit() {
    setIsEditing(1);
  }

  if (focus == 1) {
    return <div onDoubleClick={() => handleSave()}>{props.input}</div>;
  } else {
    return <div onDoubleClick={() => handleEdit()}>{props.label}</div>;
  }
}
