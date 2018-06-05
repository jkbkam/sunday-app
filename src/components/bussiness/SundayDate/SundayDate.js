import React,{Component} from 'react'
import moment from 'moment'
import 'moment/locale/pl'

moment.locale('pl')

class SundayDate extends Component {

    state = {
        DateFormatted: moment().format('LLLL')
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
        const date = this.state.DateFormatted
        return (
<div>
            <p>Dziś jest {date}</p>
</div>
        )


    }

}


export default SundayDate