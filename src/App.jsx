import React, { Component } from 'react';
import ChildProperty from './03/ChildProperty';

class App extends Component {
    render() {
        return (
            <div>
                <ChildProperty>
                    <div><span>자식노드</span></div>
                </ChildProperty>
            </div>
        );
    }
}

export default App;