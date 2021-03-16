import React from 'react';
import branch from 'recompose/branch';
import Button from '../04/Button';

export default branch(
    ({ isLoading }) => isLoading,
    () => () => <Button disabled>로딩 중..</Button>, //isLoading 함수가 참을 반환하면 이 함수를 아니면 Button 컴포넌트 반환
)(Button);