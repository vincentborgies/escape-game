import { useState, useEffect } from 'react'
import '../style/room.css'

const Timer = ({ setGameOver, setIsOpenSuccess }) => {
    const initialTime = {
        hours: 1,
        minutes: 0,
        seconds: 0
    }

    const [time, setTime] = useState(initialTime)

    useEffect(() => {
        const interval = setInterval(() => {
            if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
                clearInterval(interval)
                setIsOpenSuccess(true)
                setGameOver(true)
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
    }, [time, setGameOver])

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
