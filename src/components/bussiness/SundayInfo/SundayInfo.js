import React, {Component} from 'react'

import './SundayInfo.css'

class SundayInfo extends Component {

componentDidMount() {

    const dateNow = new Date()
const otwarte = []
    if (dateNow.getDate())
}


    render() {
        return (
            <div className="sundayInfo">
                <h3>W najbliższą niedzielę 01.07.2018r. sklepy będą OTWARTE</h3>
            </div>
        )
    }

}

export default SundayInfo