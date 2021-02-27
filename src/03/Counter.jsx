import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {

        super(props);

        this.state = {
            count: 0,
        };

        this.increseCount = this.increseCount.bind(this);

    }
    increseCount() {
        //state 변경
        this.setState(({ count }) => ({
            count: count + 1
        })
        );
    }

    render() {
        return (
            <div>
                <span>카운트:{this.state.count}</span>
                <button onClick={this.increseCount}>카운트 증가</button>
            </div>
        );
    }
}

export default Counter;