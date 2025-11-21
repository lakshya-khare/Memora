import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { WindowControls } from './components/WindowControls';
import { AppRouter } from './router';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex overflow-hidden bg-gradient-to-br from-apple-gray-50 to-apple-gray-100">
        <WindowControls />
        <Sidebar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
