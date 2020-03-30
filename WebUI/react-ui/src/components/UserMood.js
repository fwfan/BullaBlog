import React, { Component } from 'react';
import './components.css';

import { connect } from 'react-redux';
import { setUserMood, getUserMood } from '../redux/actions/userMoodActions';
import PropTypes from 'prop-types';

class UserMood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMood : '',
            moodMode : 'display'
        }
        this.changeMoodMode = this.changeMoodMode.bind(this);
        this.cancleSubmitMood = this.cancleSubmitMood.bind(this);
    }

    changeMoodMode(){
        if(this.state.moodMode == 'display'){
            this.setState({ moodMode: 'edit' });
        }else{
            this.setState({ moodMode: 'display' });
        }
        this.setState({
            editMood: ''
        });
    }

    cancleSubmitMood(){
        this.setState({ moodMode: 'display' });
    }


    textareaOnchangeHandler = (event) => {
        this.setState({
            editMood: event.target.value
        });
    }

    submitHandler = () => {

        this.changeMoodMode();
        
        fetch('/Index/Index/userMood', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"editMood":this.state.editMood})
        })
            .then(res => res.json())
            .then(json => { 
                console.log(json);
                this.setState({
                    editMood: ''
                });
             })
    }


    componentDidMount() {
        this.props.getUserMood();
    }

    render() {

        const placeholder='你想发表的心情......不能为空哦^_^';

        const btnStyle = {
            marginLeft : '20px',
            float : 'right'
        }

        return (
            <div className="author-div">
                <div className={this.state.moodMode == 'edit' ? 'usermood-form-div' : 'usermood-form-div-disable'}>
                    <form className='usermood-form' >
                        <textarea maxLength={120} className='usermood-textarea' value={this.state.editMood} onChange={this.textareaOnchangeHandler} placeholder={placeholder}></textarea>
                    </form>
                    <button className="submit-btn" style={btnStyle} onClick={this.submitHandler}>提 交</button>
                    <button className="cancel-btn" style={btnStyle} onClick={this.cancleSubmitMood}>取 消</button>
                </div>
                
                <div className={this.state.moodMode == 'edit' ? 'usermood-display-div-disable' : 'usermood-display-div'}>
                    {this.props.userMood.map(item => <p key={Math.random()}>{item['mood']}</p>)}
                    <button className="create-btn" onClick={this.changeMoodMode}>新 建</button>
                </div>

                <div className="roll-div">
                    <div className="roll-item1 roll-item"></div>
                    <div className="roll-item2 roll-item"></div>
                    <div className="roll-item3 roll-item"></div>
                    <div className="roll-item4 roll-item"></div>
                    <div className="roll-item5 roll-item"></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userMood: state.userMoodReducer.textareaValue
    }

}

function mapDispatchToProps(dispatch) {
    return {
        changeUserMood: (v) => dispatch(setUserMood(v)),
        getUserMood: () => dispatch(getUserMood())
    }
}

UserMood.propTypes = {
    userMood : PropTypes.array.isRequired,
    changeUserMood : PropTypes.func.isRequired,
    getUserMood: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(UserMood);