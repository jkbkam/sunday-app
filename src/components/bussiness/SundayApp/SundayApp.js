import React, {Component} from 'react'
import SundayDate from "../SundayDate/SundayDate";
import SundayInfo from "../SundayInfo/SundayInfo";
import SundayCalendar from "../SundayCalendar/SundayCalendar";


class SundayApp extends Component {
    render () {
        return (
            <div>
                <SundayDate/>,
                <SundayInfo/>,
                <SundayCalendar/>
            </div>
        )
    }
}

export default SundayApp