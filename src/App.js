import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './App.css';

import Datas from './constants/Datas';

import Countdown from './components/Countdown';

function App() {

    const endDate = new Date('2023-07-07T00:00:00');

    const [evento, setEvento] = useState([]);

    const [dataSelecionada, setDataSelecionada] = useState(new Date());

    const handleDateChange = (date) => {
        setDataSelecionada(date);
        const evento = Datas.find((evento) => {
            return evento.data === date.toISOString().slice(0, 10);
        });
        setEvento(evento);
    };

    const tileContent = ({ date, view }) => {
        const evento = Datas.find((evento) => {
            return evento.data === date.toISOString().slice(0, 10);
        });
        if (evento)
        {
            return (
                <div className="border-2 border-red-500 rounded-full w-4 h-4 bg-red-500 justify-center items-center mx-auto">
                </div>
            );
        }
    };

    return (
        <div
            className="flex flex-col items-center px-4 mx-auto justify-center w-full h-screen bg-gradient-to-b from-gray-500 to-slate-900 pb-12"
        >
            <h1
                className="text-4xl text-white py-6 mt-4"
            >Calendário</h1>
            <div 
                className="flex justify-center items-center py-6"
                >
                <Calendar 
                    onChange={handleDateChange}
                    value={dataSelecionada}
                    tileContent={tileContent}
                />
            </div>
            <div className="flex justify-center items-center">
                {evento ? (
                    <div
                        className="flex flex-col justify-center items-center"
                    >
                        <h2
                            className="text-2xl text-white py-6 text-center sm:py-10"
                        >{evento.nome}</h2>
                    </div>
                ) : (
                    <h2
                        className="text-2xl text-white py-6"
                    >Nenhum evento agendado para este dia</h2>
                )}
            </div>
            <Countdown endDate={endDate} />
        </div>
    );
}

export default App;
