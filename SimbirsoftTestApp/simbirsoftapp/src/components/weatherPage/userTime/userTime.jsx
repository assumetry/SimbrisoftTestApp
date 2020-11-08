import React from 'react';
import style from './userTime.module.css'

const UserTime = (props) => {

    let time = new Date()
    const minutes = time.getMinutes()

    let monthsArr = [
        [0, 'Jan'],
        [1, 'Feb'],
        [2, 'March'],
        [3, 'Apr'],
        [4, 'May'],
        [6, 'July'],
        [7, 'Aug'],
        [8, 'Sep'],
        [9, 'Oct'],
        [10, 'Nov'],
        [11, 'Dec']
    ]

    let months = new Map(monthsArr)
    let currentMonth = months.get(time.getMonth())

    return (
        <div className={style.dateTime}>
            {time.getHours()}:{minutes < 10 ? '0' + minutes : minutes}
            ,&nbsp;
            {currentMonth} {time.getDate()}
        </div>
    );
}

export default UserTime;
