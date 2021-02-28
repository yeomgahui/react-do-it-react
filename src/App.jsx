import React, { Component } from 'react';

class MyComponent extends React.Component {
    componentDidUpdate() {
        console.log('MyComponent 새로고침');
    }
}
class MyPureComponent extends React.PureComponent {
    componentDidUpdate() {
        console.log('MyPureComponent 새로고침');
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.listValue = [{ name: 'Park' }, { name: 'Lee' }];
        this.state = { version: 0 };
        this.handleClock = this.handleClock.bind(this);
    }
    handleClock() {
        setTimeout(() => {
            this.listValue[0].name = 'Justin';
            this.setState({ version: 1 });
        }, 100);
        setTimeout(() => {
            this.listValue = [{ name: 'Justin' }, { name: 'Lee' }];
            this.setState({ version: 2 });
        });
    }
    render() {
        return (
            <PureComponent />
        );
    }
}

export default App;