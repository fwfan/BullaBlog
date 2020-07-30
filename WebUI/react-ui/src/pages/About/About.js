import React, {Component} from 'react';
// import ScrollDiv from '../../components/ScrollDiv/ScrollDiv.js';
import './About.scss';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        let aboutDivBackgroundStyle={
            //background: `url(${JinFengImage}) no-repeat fixed;`
            // background: 'url('+  './images/jinfeng.jpg' + ') no-repeat fixed;'
        }

        return(
            <div className="about-div" style={aboutDivBackgroundStyle}>
                <div className='about-div-title'><p className='about-div-p-title'>No ending ...</p></div>
            </div>
        );
    }
}

export default About;