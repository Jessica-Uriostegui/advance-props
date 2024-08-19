import React from 'react';
import UserInfo from './components/UserInfo';
import './App.css';

const App: React.FC = () => {
  const userData = {
    name: 'James Smith',
    age: 25,
    email: 'james.smith@example.com'
  };

  return (
    <div>
      <h1>Welcome to the User Information app</h1>
      <UserInfo name={userData.name} age={userData.age} email={userData.email} />
    </div>
  );
};

export default App;
