import React, {Component} from 'react'
import './SundayInfo.css'

import dateList from '../../../dateList.json';

class SundayInfo extends Component {


    render() {
        return (
            <div className="sundayInfo">
                  <ul>
        {
          dateList.map(function(oneData){
            return <li>{oneData.czerwiec}</li>;
          })
        }
        </ul>
            </div>
        )
    }

}

export default SundayInfo