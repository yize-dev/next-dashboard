import { memo, forwardRef } from 'react';

// @mui
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';

//
import { StyledRootScrollbar, StyledScrollbar } from './styles';

// import { ScrollbarProps } from './types';

type ScrollbarProps = {
  children:  React.ReactNode,

  sx: SxProps,

  [other: string]: any
}

// ----------------------------------------------------------------------


const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(({ children, sx, ...other }, ref) => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  if (isMobile) {
    return (
      <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }
  return (
    <StyledRootScrollbar>
      <StyledScrollbar
        scrollableNodeProps={{
          ref,
        }}
        clickOnTrack={false}
        sx={sx}
        {...other}
      >
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
});
Scrollbar.displayName = 'Scrollbar';
export default memo(Scrollbar);
