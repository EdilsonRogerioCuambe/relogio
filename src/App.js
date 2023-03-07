
import './App.css';

import Countdown from './components/Countdown';

function App() {

    const endDate = new Date('2023-07-07T00:00:00');

    return (
        <div 
            className="flex flex-col items-center px-4 mx-auto justify-center w-full h-screen text-white bg-gradient-to-b from-gray-500 to-slate-900"
            >
            <Countdown endDate={endDate} />
        </div>
    );
}

export default App;
