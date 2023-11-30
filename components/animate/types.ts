export type TranHoverType = {
    duration?: number;
    ease?: number[];
  };
  
  export type TranEnterType = {
    durationIn?: number;
    easeIn?: number[];
  };
  
  export type TranExitType = {
    durationOut?: number;
    easeOut?: number[];
  };

export type VariantsType = {
    durationIn: number;
    durationOut: number
    easeIn: number[];
    easeOut: number[];
    in?: {
      initial?: object;
      animate: object;
      exit: object;
    };
    out?: {
      animate: object;
    };
    outUp?: {
      animate: object;
    };
    outDown?: {
      animate: object;
    };
    outLeft?: {
      animate: object;
    };
    outRight?: {
      animate: object;
    };
  };