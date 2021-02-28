import React, { Component } from 'react';

//App 컴포넌트가 전달한 최초의 프로퍼티값은 state.count에 저장이 되며, NewCounter 컴포넌트는 
//state.newCount로 증가값을 따로 분리하여 관리한다. 
//state.count가 아니라 state.newCount로 증가값을 관리하는 이유는 getDerivedStateFromProps()함수는 
//다른 프로퍼티가 변경되어도 호출되기 때문이다. 
//count프로퍼티가 변경되었는지 비교하려면 이처럼 값을 따로 관리해야한다. 
class NewCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.increaseCount = this.increaseCount.bind(this);
    }
    //이 함술는 정적함수이기 때문에 this.state, this.props와 같은 방법으로 프로퍼티나 state값에 접근 불가능
    //각 값에 접근하기 위해서는 인자로 전달된 props나 state를 이용해야한다. 
    //이때 props는 상위 컴포넌트에서 전달된 값이며, state는 현재 컴포넌트의 state값이다. 
    //즉, 이 함수는 상위 컴포넌트에서 전달받은 프로퍼티로 state값을 연동할 때 주로 사용되면 반환값으로 state값을 변경한다.
    static getDerivedStateFromProps(props, state) {
        const { count } = props;
        console.log("count: ", count);
        console.log("state.count", state.count);
        console.log("state.newCount", state.newCount);
        return {
            //프로퍼티에서 전달된 count값을 보관한다.
            count,
            newCount: count === state.count
                //프로퍼티가 변경되지 않았다면 기존 state값으로 설정한다
                ? state.newCount
                //프로퍼티가 변경 되었다면 변경된 프로퍼티값으로 설정한다.
                : count,
        };
    }
    increaseCount() {
        this.setState(({ newCount }) => ({
            newCount: newCount + 1
        }));
    }
    render() {
        return (
            <div>
                현재 카운트: {this.state.newCount}
                <button onClick={this.increaseCount}>
                    카운트 증가
                </button>
            </div>
        );
    }
}

export default NewCounter;