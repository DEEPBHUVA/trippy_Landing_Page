import { Component } from 'react';
import './DestinationStyles.css'
import Mountain from '../assets/1.jpg'
import Mountain1 from '../assets/2.jpg'
import Mountain2 from '../assets/3.jpg'
import Mountain3 from '../assets/4.jpg'

class DestinationData extends Component{
    render(){
        return(
           
            <div className={this.props.className}>
                <div className='des-text'>
                    <h2>
                    {this.props.head}
                    </h2>
                    <p>
                    {this.props.text}
                    </p>
                </div>

                <div className='image'>
                    <img src={this.props.img1} alt='img'></img>
                    <img src={this.props.img2} alt='img'></img>
                </div>
            </div>
        )
    }
}

export default DestinationData;
