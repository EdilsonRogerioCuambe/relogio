import React, { useState, useEffect } from 'react';

const Countdown = ({
    endDate
}) => {

    const [countdown, setCountdown] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const agora = new Date().getTime();
            const futuro = endDate.getTime() - agora;

            const dias = Math.floor(futuro / (1000 * 60 * 60 * 24));
            const horas = Math.floor((futuro % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((futuro % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((futuro % (1000 * 60)) / 1000);

            setCountdown({
                dias,
                horas,
                minutos,
                segundos
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [endDate]);

    return (
        <div
            className='justify-center items-center text-white'
        >
            <h1 className='text-4xl font-bold justify-center items-center text-center'>Contagem regressiva para o fim do semestre😉</h1>
            <div className='flex flex-row items-center justify-center w-full h-full py-6'>
                <div className='flex flex-col items-center justify-center w-1/4 h-full'>
                    <h2 className='text-2xl font-bold'>{countdown.dias}</h2>
                    <p className='text-xl'>Dias</p>
                </div>
                <div className='flex flex-col items-center justify-center w-1/4 h-full'>
                    <h2 className='text-2xl font-bold'>{countdown.horas}</h2>
                    <p className='text-xl'>Horas</p>
                </div>
                <div className='flex flex-col items-center justify-center w-1/4 h-full'>
                    <h2 className='text-2xl font-bold'>{countdown.minutos}</h2>
                    <p className='text-xl'>Minutos</p>
                </div>
                <div className='flex flex-col items-center justify-center w-1/4 h-full'>
                    <h2 className='text-2xl font-bold'>{countdown.segundos}</h2>
                    <p className='text-xl'>Segundos</p>
                </div>
            </div>
        </div>
    )
}

export default Countdown;