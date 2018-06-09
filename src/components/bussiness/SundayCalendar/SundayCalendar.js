import React, {Component} from 'react'
import Calendar from 'react-calendar'

import './SundayCalendar.css'

class SundayCalendar extends Component {

    state = {
        date: new Date(),
    }



    onChange = date => this.setState({date})



    render() {
        return (

            <div className="sundayCalendar">
                <Calendar
                className={"calendar"}
                onChange={this.onChange}
                value={this.state.date}/>
            </div>
        )
    }
}

export default SundayCalendar