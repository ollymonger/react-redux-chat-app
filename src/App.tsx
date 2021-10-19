import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { chatSlice, setName, connectAsync } from './features/chat/chatSlice';

function App() {
  const app = useAppSelector(chatSlice);
  const dispatch = useAppDispatch();


  return (
    <div>
      <input onChange={(e) => dispatch(setName(e.target.value))} />
      <button onClick={(e) => dispatch(connectAsync())}>Connect {app.chat.name ? `as ${app.chat.name}` : ''}</button>
    </div>
  );
}

export default App;
