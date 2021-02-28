import React, { Component } from 'react';
import TodayPlan from './TodayPlan';

class TodaysPlanApp extends Component {
    render() {
        const { onButtonClick, hasPlan } = this.props;

        return (
            <div className="body">
                {hasPlan ? <TodayPlan /> : null}
                <button onClick={onButtonClick}>
                    계획 없음
                </button>
            </div>
        );
    }
}

export default TodaysPlanApp;