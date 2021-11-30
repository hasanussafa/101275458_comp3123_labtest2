import React from 'react'
import axios from 'axios'
//import logo from 'http://openweathermap.org/img/wn/10d@2x.png';

export default class WeatherCondition extends React.Component 
{
    //Define state default values
    state = {
        persons: []
    }

    componentDidMount() {
        
        axios.get(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e9bdb44137fdbf0cbca55a342f39596e`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.weather;
            this.setState({ persons });
        })
    }
   
// show data
  render() {
    return (
      <div>
        <current>
  <city id="0" name="Mountain View">
    <coord lon="-122.09" lat="37.39" />
    <country>"US"</country>
    <timezone>-28800</timezone>
    <sun rise="2020-01-07T15:22:59" set="2020-01-08T01:05:37" />
  </city>
  <temperature value="278.07" min="273.15" max="282.59" unit="kelvin" />
  <feels_like value="275.88" unit="kelvin" />
  <humidity value="86" unit="%" />
  <pressure value="1026" unit="hPa" />
  <wind>
    <speed value="0.93" unit="m/s" name="Calm" />
    <gusts />
    <direction value="23" code="NNE" name="North-northeast" />
  </wind>
  <clouds value="1" name="clear sky" />
  <visibility value="16093" />
  <precipitation mode="no" />
  <weather number="800" value="clear sky" icon="01n" />
  <lastupdate value="2020-01-07T11:33:40" />
  </current>
      </div>
    )
  }
}