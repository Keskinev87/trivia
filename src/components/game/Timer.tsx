import React from 'react';

type timeProps = {
    seconds: number
}

type timeState = {
    seconds: number;
}

class Timer extends React.Component<timeProps, timeState> {
    private interval: any;

    constructor(props:timeProps) {
        super(props);
        this.state = {
            seconds: props.seconds,
        };
        this.updateTime = this.updateTime.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    componentWillUnmount() {
        if(this.interval)
            clearInterval(this.interval);
    }

    updateTime() {
        // console.log(this.state.seconds)
        if(this.state.seconds > 0)
            this.setState({
                seconds: this.state.seconds - 1
            })
        else
            this.stopTimer();
    }

    stopTimer() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <span>{this.state.seconds}</span>
        )
    }
}

export default Timer;