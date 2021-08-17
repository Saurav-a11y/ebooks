import react from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from './Components/Header/Header';
import { fetchBook } from './Components/Redux/Book/bookAction';
import { HomePage } from './Page/HomePage/HomePage'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBook())
  }, [])

  return (
    <div className="App">
      <Header />
      <HomePage  />
    </div>
  );
}

export default App;
