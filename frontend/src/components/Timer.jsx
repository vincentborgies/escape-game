import { useState, useEffect } from 'react'
import '../style/room.css'

const Timer = () => {
    const [time, setTime] = useState({
        hours: 1,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
                clearInterval(interval)
                // Le compte à rebours est terminé, vous pouvez ajouter une action à exécuter ici.
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

                    return { hours, minutes, seconds }
                })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [time])

    return (
        <div style={{ fontFamily: 'Digital', color: 'blue', backgroundColor: 'transparent', position: 'absolute' }}>
            {String(time.hours).padStart(2, '0')} : {String(time.minutes).padStart(2, '0')} :{' '}
            {String(time.seconds).padStart(2, '0')}
        </div>
    )
}

export default Timer
