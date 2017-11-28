import React ,{Component} from 'react';
import {Pie} from 'react-chartjs-2';



    const data = {
        labels: ["LopTop", "SmartPhone", "SwimSuit", "nexusOne" , "MacBookPro", "IMac" , "AsusLoptops"],
        datasets: [
            {
                data: [22, 245, 101,323,435,334,424],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#a8ff2f",
                    "#258eff",
                    "#ff3bfa",
                    "#55ff5e",
                ]
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: "Chore Distribution for this Month",
            fontFamily: "Roboto",
            fontSize: 20,
        }
    }

export default class PieChart extends Component {

    render () {
      return (<Pie  data={data} options={options}/>)
    }
}
