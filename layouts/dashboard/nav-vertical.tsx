"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'

// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
// hooks
import { useResponsive } from '@/hooks/use-responsive';
// hooks
import { useMockedUser } from '@/hooks/use-mocked-user';
// components
import Logo, { Dropify } from '@/components/logo';
import Scrollbar from '@/components/scrollbar';
import { NavSectionVertical } from '@/components/nav-section';
//
import { NAV } from '../config-layout';
import { useNavData } from './config-navigation';
import { NavToggleButton, NavUpgrade } from '../_common';
import { ListItemText, SvgIcon, Typography } from '@mui/material';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { user } = useMockedUser();

  const pathname = usePathname();

  const lgUp = useResponsive('up', 'lg');

  const navData = useNavData();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      
      <Stack direction="row">
        <Logo sx={{ mt: 3, ml: 4}} />
        <Dropify sx={{ mt: 3, ml: 2}}/>
      </Stack>

      <Stack direction="row"  sx={{
         mx:2, my:3, pl: "10px",
         border: '2px dashed #b8b4b4',
         alignItems:'center',
         cursor: 'pointer',
         '&:hover': {
          backgroundColor:"#F2F4F8",
        },
      }}>
        <Link href="https://weikenuo1.myshopify.com/admin"  component={NextLink} sx={{ display: 'contents' }} target="_blank">
        <Box sx={{mr:2, height:1, display: 'flex', alignItems: 'center'}}>
           <img src="/assets/icons/navbar/shopify_icon.svg" width="23" height="23" />
        </Box>

        <ListItemText primary={`weikenuo1`} primaryTypographyProps={{
            noWrap: true,
            typography: 'body2',
            textTransform: 'capitalize',
            fontWeight: 'fontWeightSemiBold',
            color: '#9e9e9e', height:"40px", lineHeight: "40px",
          }}
        />
        </Link>
      </Stack>



      <NavSectionVertical
        data={navData}
        config={{
          currentRole: user?.role || 'admin',
        }}
      />

      <Box sx={{ flexGrow: 1 }} />

    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_VERTICAL },
      }}
    >
      <NavToggleButton />

      {lgUp ? (
        <Stack
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.W_VERTICAL,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
