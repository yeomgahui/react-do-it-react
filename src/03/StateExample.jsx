import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props) {
        super(props);
        //state 정의
        this.state = {  //컴포넌트에서 관리하려는 변수 state의 초깃값을 this.state에 객체 형태로 정의함
            loading: true,
            formData: 'no data',
        };

        this.handleData = this.handleData.bind(this); //함수로 넘어갈 this는 반드시 생성자에서 bind()함수로 묶어주어야한다. => 잘 이해안감
        //4초 후에 handleData 함수를 호출한다.
        setTimeout(this.handleData, 4000);
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default StateExample;