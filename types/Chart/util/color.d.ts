export declare const color: {
    YELLOW: string;
    LIGHT_YELLOW: string;
    GRAY: string;
    LIGHT_GRAY: string;
    BLACK: string;
    NPS: {
        RED: string;
        YELLOW: string;
        GREEN: string;
        BLUE: string;
    };
};
export declare const getColors: {
    pie: (seriesLength: number, maxIndex: number) => string[];
    barStacked: (seriesLength: number) => string[];
    bubble: (seriesLength: number, maxIndex: number) => string[];
};
