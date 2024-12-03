// App.tsx
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Login from './components/Login';
import TodoList from './components/TodoList'; // Assuming you have a TodoList component
import { User } from './models/User';
import './App.css';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const { uid, email } = firebaseUser;
        setUser({ uid, email });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {user ? (
        <div className="Welcome">
          <div className="greeting">Welcome, {user.email}</div>
          <button onClick={handleSignOut}>Sign Out</button>
          <TodoList />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
