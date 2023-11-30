
'use client'

import { forwardRef} from 'react'

import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';

import NextLink from 'next/link';


export interface LogoProps extends BoxProps {
    disabledLink?: boolean;
}


const D =  forwardRef<HTMLDivElement, LogoProps>(
    ({disabledLink = false, sx, ...other}, ref) => {

    const theme = useTheme();
    
    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    const logo =   (
        <Box
            ref={ref}
            component="div"
            sx={{
                width: 60,
                height: 60,
                display: 'inline-flex',
                ...sx,
            }}
            {...other}
        >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="-0.5 -0.5 24 24" >
                <path stroke={PRIMARY_MAIN} stroke-linejoin="round" d="M16.771 13.417H22.042" stroke-width="1"></path>
                <path stroke={PRIMARY_MAIN} stroke-linejoin="round" d="M18.688 10.542c0.541 2.057 0.667 3.212 0.479 5.271" stroke-width="1"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.396 8.146s-1.054 -0.166 -0.941 -0.62C1.976 5.424 14.179 7.404 14.375 13.417c0.174 5.358 -11.18 2.875 -11.021 0 0.076 -1.361 7.511 -1.748 8.067 -0.415 0.33 0.791 -0.38 1.083 -0.834 1.148" stroke-width="1"></path>
                <path stroke={PRIMARY_MAIN} stroke-linecap="round" stroke-linejoin="round" d="M7.188 10.063c-0.147 2.75 -0.253 4.284 0 7.188" stroke-width="1"></path>
            </svg>
        </Box>
    )
    if (disabledLink) {
        return <>{logo}</>
    }

    return (
        <Link href='/' component={NextLink} sx={{ display: 'contents' }}>
        {logo}
      </Link>
    )

});
D.displayName = 'D';

export default D;


