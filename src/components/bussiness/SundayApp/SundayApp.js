import React, {Component} from 'react'
import SundayDate from "../SundayDate/SundayDate";
import SundayInfo from "../SundayInfo/SundayInfo";


class SundayApp extends Component {
    render () {
        return (
            <div>
                <SundayDate/>,
                <SundayInfo/>
            </div>
        )
    }
}

export default SundayApp