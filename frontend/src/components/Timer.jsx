import { useState, useEffect } from 'react'
import '../style/room.css'

const Timer = () => {
    const initialTime = {
        hours: 1,
        minutes: 0,
        seconds: 0
    }

    // Vérifier s'il y a une valeur précédemment enregistrée dans le stockage local
    const savedTime = JSON.parse(localStorage.getItem('timer')) || initialTime

    const [time, setTime] = useState(savedTime)

    useEffect(() => {
        const interval = setInterval(() => {
            if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
                clearInterval(interval)
                // Le compte à rebours est terminé, affichez une alerte "game over".
                alert('Game Over')
            } else {
                setTime((prevTime) => {
                    let hours = prevTime.hours
                    let minutes = prevTime.minutes
                    let seconds = prevTime.seconds

                    if (seconds === 0) {
                        if (minutes === 0) {
                            hours--
                            minutes = 59
                            seconds = 59
                        } else {
                            minutes--
                            seconds = 59
                        }
                    } else {
                        seconds--
                    }

                    // Enregistrez le temps actuel dans le stockage local
                    localStorage.setItem('timer', JSON.stringify({ hours, minutes, seconds }))

                    return { hours, minutes, seconds }
                })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [time])

    return (
        <div
            style={{
                fontFamily: 'Arial',
                color: 'white',
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                marginTop: 20,
                fontSize: 50,
                marginLeft: 10
            }}
        >
            {String(time.hours).padStart(2, '0')} : {String(time.minutes).padStart(2, '0')} :{' '}
            {String(time.seconds).padStart(2, '0')}
        </div>
    )
}

export default Timer
