import React, { Component } from 'react'
import './Calendar.scss'

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            today: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate(),
                week: new Date().getDay(), // 0-6, 0代表星期天
            },
            selectDate: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1
            },
            data: [
                { date: '1588464000000', content: '内容1' },
                { date: '1589904000000', content: '内容2' }
            ]
        }
    }

    fetchData = (url)=>{
        if(!url) return;
        fetch(url, {
            method: 'GET'
        }).then(res => res.json()).then(
            (data) => {
                if (data.result.length > 0) {
                    this.setState({
                        ...this.state, ...data.result
                    });
                } 
            }
        );
    }

    componentDidMount(){
        this.fetchData(this.props.url);
    }

    isLeapYear = (year) => {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return true;
        }
        return false;
    }

    getMonthDayArr = (year, month) => {
        const firstDay = new Date(year + '-' + month + '-' + '01');
        const weekDay = firstDay.getDay();

        var dayObj = {
            day: 1, 
            month : 1, 
            year : 2020,
            isThisMonth: true, 
            isCurrentToday : false,
            isCurrentMonth : false,
            data : ''
        };

        var today = new Date().getDate();

        var monthArr = [], week = -1, flag = 1; 
        for (let index = 0; index < 49; index++) {
            const wd = index%7;
            if(wd === 0){
                week ++ ;
                monthArr[week]=[];
            }

            if(week === 0){
                monthArr[week] = [
                    { day: '日', data: '', isThisMonth: true},
                    { day: '一', data: '', isThisMonth: true},
                    { day: '二', data: '', isThisMonth: true},
                    { day: '三', data: '', isThisMonth: true},
                    { day: '四', data: '', isThisMonth: true},
                    { day: '五', data: '', isThisMonth: true},
                    { day: '六', data: '', isThisMonth: true }] 
            }else{
                monthArr[week][wd] = Object.assign({}, dayObj);
                if (week === 1) {
                    if (wd === weekDay){
                        monthArr[week][wd]['day'] = 1;
                    } else if (wd > weekDay){
                        monthArr[week][wd]['day'] = 1 + wd - weekDay;
                    }else {
                        if(month - 1 === 2 && this.isLeapYear(year)){
                            monthArr[week][wd]['day'] = 29 - (weekDay - wd) + 1;
                            monthArr[week][wd]['isThisMonth'] = false;
                        } else if(month - 1 === 2 && !this.isLeapYear(year)){
                            monthArr[week][wd]['day'] = 28 - (weekDay - wd) + 1;
                            monthArr[week][wd]['isThisMonth'] = false;
                        } else if (month - 1 === 1 || month - 1 === 3 || month - 1 === 5 || month - 1 === 7 || month - 1 === 8 || month - 1 === 10 || month - 1 === 12){
                            monthArr[week][wd]['day'] = 31 - (weekDay - wd) + 1;
                            monthArr[week][wd]['isThisMonth'] = false;
                        } else {
                            monthArr[week][wd]['day'] = 30 - (weekDay - wd) + 1;
                            monthArr[week][wd]['isThisMonth'] = false;
                        }
                        
                     }
                }else{
                    if (month === 2 && this.isLeapYear(year)) {
                        if (monthArr[1][6]['day'] + 7 * (week - 2) + 1 + wd > 29) {
                            monthArr[week][wd]['day'] = flag;
                            monthArr[week][wd]['isThisMonth'] = false;
                            flag ++ ;
                        } else {
                            monthArr[week][wd]['day'] = monthArr[1][6]['day'] + 7 * (week - 2) + 1 + wd;
                        }
                    } else if (month === 2 && !this.isLeapYear(year)) {
                        if (monthArr[1][6]['day'] + 7 * (week - 2) + 1 + wd > 28) {
                            monthArr[week][wd]['day'] = flag;
                            monthArr[week][wd]['isThisMonth'] = false;
                            flag++;
                        } else {
                            monthArr[week][wd]['day'] = monthArr[1][6]['day'] + 7 * (week - 2) + 1 + wd;
                        }
                    } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                        if (monthArr[1][6]['day'] + 7 * (week - 2) + 1 + wd > 31) {
                            monthArr[week][wd]['day'] = flag;
                            monthArr[week][wd]['isThisMonth'] = false;
                            flag++;
                        } else {
                            monthArr[week][wd]['day'] = monthArr[1][6]['day'] + 7 * (week - 2) + 1 + wd;
                        }
                    } else {
                        if (monthArr[1][6]['day'] + 7 * (week - 2) + 1 + wd > 30) {
                            monthArr[week][wd]['day'] = flag;
                            monthArr[week][wd]['isThisMonth'] = false;
                            flag++;
                        } else {
                            monthArr[week][wd]['day'] = monthArr[1][6]['day'] + 7 * (week - 2) + 1 + wd;
                        }
                    }
                }
            }
            for (let j = 0; j < this.state.data.length; j++) {
                const el = this.state.data[j];
                let d = el.date;

                let dYear = new Date(parseInt(d)).getFullYear();
                let dMonth = new Date(parseInt(d)).getMonth() + 1;
                let dDate = new Date(parseInt(d)).getDate();

                if (month === dMonth && year === dYear && monthArr[week][wd]['day'] === dDate && monthArr[week][wd]['isThisMonth']) {
                    monthArr[week][wd]['data'] = el.content;
                }

            }
            if (monthArr[week][wd]['day'] === today && month === this.state.today.month){
                monthArr[week][wd]['isToday'] =  true;
            }
        }

        return monthArr;
    }

    pre=()=>{
        let month = this.state.selectDate.month;
        let year =  this.state.selectDate.year;
        let state = this.state;
        if(month === 1){
            month = 12;
            year = year - 1;
        }else{
            month = month - 1;
        }
        this.setState({
            state, ...{
                selectDate: {
                    year: year,
                    month: month
                }
        }});
    }

    next=()=>{
        let month = this.state.selectDate.month;
        let year = this.state.selectDate.year;
        let state = this.state;
        if (month === 12) {
            month = 1;
            year = year + 1;
        } else {
            month = month + 1;
        }
        this.setState({
            state, ...{
                selectDate: {
                    year: year,
                    month: month
                }
            }
        });
    }

    componentDidMount(){

    }

    getDayStyle=(dayObj)=>{
        let notThisMonthDayStyle = {};

        notThisMonthDayStyle ={
            color: dayObj['isThisMonth'] ? '' : 'grey',
            backgroundColor: dayObj['data'] ? 'rgb(157, 252, 169)' : '',
            fontWeight: dayObj['isToday'] ? 'bolder' : ''
        }

        return notThisMonthDayStyle;
    }

    render() {
        const styles = {
            width: this.props.style.width,
            height: this.props.style.height,
            margin: this.props.style.margin
        }

        let month = [], week =[];
        const monthArr = this.getMonthDayArr(this.state.selectDate.year, this.state.selectDate.month);
    
        for (let index = 0; index < monthArr.length; index++) {
            const element = monthArr[index];
            week = [];
            if (!element[element.length - 1]['isThisMonth'] && index === 1){

            } else if (!element[0]['isThisMonth'] && index === 6){

            }else{
                for (let i = 0; i < element.length; i++) {
                    const e = element[i];
                    if (e.data){
                        week.push(<td key={'calendar-td' + index + i} style={this.getDayStyle(e)}>{e['day']}<span>{e.data}</span></td>);
                    }else{
                        week.push(<td key={'calendar-td' + index + i} style={this.getDayStyle(e)}>{e['day']}</td>);
                    }
                   
                }
            }
            
            month.push(<tr key={'calendar-tr'+index}>{week}</tr>);
        }
        
        return (
            <div className='calender-div' style={styles}>
                <div className='calender-select-date-div'>
                    <div className='calender-preMonth'><button onClick={this.pre}>上一月</button></div>
                    <div className='calendar-select-date-div-date-div'>{this.state.selectDate.year + '年' + this.state.selectDate.month + '月'}</div>
                    <div className='calender-nextMonth'><button onClick={this.next}>下一月</button></div>
                </div>
                <div className='calender-month-div'>
                    <table className='calender-month-table'><tbody>{month}</tbody></table>
                </div>
            </div>)
    }

}

Calendar.defaultProps = {
    style: {
        width: '220px',
        height: '200px',
    },
    data : [
        { date: '1588464000000', content:'举例：更新内容1'},
        { date: '1589904000000', content: '举例：更新内容2' }
    ]
};

export default Calendar;

