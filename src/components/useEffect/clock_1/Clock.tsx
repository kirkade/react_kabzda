import React, {useEffect, useState} from 'react';
import styles from './Clock.module.css'

type PropsType = {
    mode?: 'analog' | 'digital'
}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])


    let view

    switch (props.mode) {
        case 'analog' :
            view = <AnalogClockView date={date}/>
            break
        case 'digital' :
        default:
            view = <DigitalClockView date={date}/>

    }

    return (
        <div>
            {view}
        </div>
    );
};

type clockPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<clockPropsType> = ({date}) => {
    const getStringWithNull = (num: number) => num < 10 ? '0' + num : num
    return <>
        <span>{getStringWithNull(date.getHours())}</span>
        :
        <span>{getStringWithNull(date.getMinutes())}</span>
        :
        <span>{getStringWithNull(date.getSeconds())}</span>
    </>
}

export const AnalogClockView: React.FC<clockPropsType> = ({date}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return <>
        <div className={styles.clock}>
            <div className={styles.analogClock}>
                <div className={`${styles.dial} ${styles.seconds} `} style={secondsStyle}/>
                <div className={`${styles.dial} ${styles.minutes} `} style={minutesStyle}/>
                <div className={`${styles.dial} ${styles.hours} `} style={hoursStyle}/>
            </div>

        </div>
    </>

}
