import compose from 'recompose/compose';
import withLoading from './withLoading';
import withState from 'recompose/withState';

const withLoadData = withState('isLoading', 'setIsLoading', false);

function Compose() {
    return '완료 (컴포넌트 출력)';
}
const ComponentWithLoading = withLoading('로딩 중')(Component);
const ComponentWithLoadData = withLoadData(ComponentWithLoading);

const withLoadDataLoading = compose(withLoadData, withLoading('로딩 중'));
//조합이 올바르지 못한 예: compose(withLoadData, withLoading)
//순서가 올바르지 못한 예: compose(withLoading('로딩중'), withLoadData)
const ComponentWithLoadData = withLoadDataAndLoading(ComponentWithLoading);
// 혹은 compose(withLoadData, withLoading('로딩 중))(ComponentWithLoading);