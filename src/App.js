import './App.css';
import { Header } from './components/Header'
import { NotesTodo } from './components/NotesTodo'
import { NotesList } from './components/NotesList'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <NotesTodo className="notes-form" />
        <NotesList />
      </div>
    </GlobalProvider>
  );
}

export default App;
