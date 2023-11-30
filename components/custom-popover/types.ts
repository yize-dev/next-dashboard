export type MenuPopoverArrowValue =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom'
  | string;

  export type MenuPopoverProps = {
    open: HTMLElement | null;
    children: React.ReactNode;
    arrow?: string;
    hiddenArrow?: boolean;
    sx?: object;
    onClose?: () => void;
    // other props...
  };