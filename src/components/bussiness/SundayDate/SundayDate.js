import React,{Component} from 'react'
import moment from 'moment'
import 'moment/locale/pl'

import './SundayDate.css'

moment.locale('pl')

class SundayDate extends Component {

    state = {
        dateFormatted: moment().format('LLLL')
}

 tick = () => {
        this.setState({
        dateFormatted: moment().format('LLLL')
        })
}

componentDidMount () {
        setInterval(this.tick, 1000)
}

    render () {
        const date = this.state.dateFormatted
        return (
<div className="sundayDate">
            <h1>Dziś jest {date}</h1>
</div>
        )


    }

}


export default SundayDate