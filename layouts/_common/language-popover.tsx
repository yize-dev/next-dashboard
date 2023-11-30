"use client"

import { useCallback } from 'react';
import { m } from 'framer-motion';
// @mui
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
// locales
import { useLocales } from '@/locales';
// components
import Iconify from '@/components/iconify';
import { varHover } from '@/components/animate';
import CustomPopover, { usePopover } from '@/components/custom-popover';
import { Button, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const locales = useLocales();

  const popover = usePopover();

  const handleChangeLang = useCallback(
    (newLang: string) => {
      locales.onChangeLang(newLang);
      popover.onClose();
    },
    [locales, popover]
  );

  return (
    <>
      <Button
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          ...(popover.open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        {/* <Iconify icon={locales.currentLang.icon} sx={{ borderRadius: 0.65, width: 28 }} /> */}
        <Typography variant="body1" >
            {locales.currentLang.label}
        </Typography>

      </Button>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 160 }}>
        {locales.allLangs.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === locales.currentLang.value}
            onClick={() => handleChangeLang(option.value)}
          >
            {/* <Iconify icon={option.icon} sx={{ borderRadius: 0.65, width: 28 }} /> */}

            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
