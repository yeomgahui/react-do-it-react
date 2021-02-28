function TodaysPlanApp(props) {
    const { onButtonClick, hasPlan } = props;
    return (
        <div className="body">
            {hasPlan ? <TodyasPlan /> : null}
            <button onClick={onButtonClick}>
                게획없음
            </button>
        </div>
    );
}