import React, { Component } from 'react';
import { create } from './ScoresApi';



class Timer extends Component {
    state={
        count:0,
        min:0,
        sec:0
    }
    componentDidMount(){
        this.myInterval= setInterval(()=>{
            this.setState(prevState =>({
                count:this.state.count+1
            }))
        },1000)
        
    }
    // componentWillMount(){
    //     clearInterval(this.myInterval)
    // }
    componentDidUpdate(){
        if(this.state.count===60){
            
            this.setState({
                count:0,
                min:this.state.min+1
            })

        }
    }
    render() {
        let time=`${this.state.min}:${this.state.count}`
        if(this.props.score===4){
            
            clearTimeout(this.myInterval)
            create(this.props.user,time,this.props.game)
            alert('bravoooooo/n you spend '+time)
            // swal({
            //     title: "Good job!",
            //     text: "You clicked the button!",
            //     icon: "success",
            //     button: "Aww yiss!",
            //   });
        }
       

        return (
            <div>
                {/* <p>{time}</p> */}

            </div>
        );
    }
}

export default Timer;