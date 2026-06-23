import React, { useState } from 'react';

const Phonebook = () => {
  // 1. تعريف حالات المكون (States) لتخزين الأسماء والمدخلات
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  // 2. دالة التعامل مع إضافة اسم ورقم جديدين
  const addPerson = (event) => {
    event.preventDefault();

    // التحقق من عدم تكرار الاسم
    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase());
    
    if (nameExists) {
      alert(${newName} موجود مسبقاً في دليل الهاتف!);
      return;
    }

    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    };

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>دليل الهاتف (Phonebook) - الأسبوع الخامس</h2>
      
      {/* نموذج إضافة جهة اتصال جديدة */}
      <form onSubmit={addPerson} style={{ marginBottom: '20px' }}>
        <h3>إضافة جهة اتصال جديدة</h3>
        <div style={{ marginBottom: '10px' }}>
          <label>الاسم: </label>
          <input 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>الرقم: </label>
          <input 
            value={newNumber} 
            onChange={(e) => setNewNumber(e.target.value)} 
            required
          />
        </div>
        <button type="submit">إضافة</button>
      </form>

      {/* عرض قائمة الأسماء والأرقام */}
      <h3>الأرقام المسجلة</h3>
      <ul>
        {persons.map(person => (
          <li key={person.id} style={{ marginBottom: '5px' }}>
            {person.name} : {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};
