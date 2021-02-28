import React, { Component } from 'react';
import shallowEqual from 'shallow-equal';

//pure Component 클래스는 Component 클래스를 상속받은 클래스임
class PureComponent extends Component {
    render() {
        const obj = { name: 'park' };
        const mylist = [1, 2, 3, obj];
        const list1 = [1, 2, 3, obj];
        const list2 = [1, 2, 3, { name: 'park' }];
        console.log(mylist === list1);//false
        console.log(shallowEqual(mylist, list1));

        return (
            <div>
                {mylist === list1}
            </div>
        );
    }
}

export default PureComponent;