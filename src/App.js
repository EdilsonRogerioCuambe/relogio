
import './App.css';

import Countdown from './components/Countdown';

function App() {

    const endDate = new Date('2023-07-07T00:00:00');

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen text-white bg-gray-900">
            <Countdown endDate={endDate} />
        </div>
    );
}

export default App;
