export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
    LARGE: 'large',
    MEDIUN: 'medium',
    SMALL: 'small',
};
const breakpoints = {
    [BREAKPOINT_NAMES.LARGE]: 1128,
    [BREAKPOINT_NAMES.MEDIUN]: 744,
    [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
    [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
    [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUN] - 1}px)`,
    print: `@media print`,
};

export default {
    //색상
    color: {
        primary: '#03a9f4', //주색상
        secondary: '#795548', //부 색상
        white: '#FFFFFF',
        gray: '#CCCCCC',
        default: '#999999', //기본 문자 색상
    },
    //글꼴 크기
    size: {
        xg: 24,
        lg: 18,
        md: 14,
        sm: 12,
        xs: 10,
    },
    lineHeight: {
        xg: '60px',
        lg: '54px',
        md: '36px',
        sm: '24px',
        xs: '18px',
    },
    unit: 4,
    responsive,
};