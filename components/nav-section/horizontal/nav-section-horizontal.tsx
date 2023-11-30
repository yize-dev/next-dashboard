'use client'
import { memo } from 'react';
// @mui
import Stack from '@mui/material/Stack';
// theme
import { hideScroll } from '@/theme/css';
//
import { NavSectionProps, NavListProps, NavItemProps, NavConfigProps , NavListRootProps} from '../types';
import { navHorizontalConfig } from '../config';
import NavList from './nav-list';

// ----------------------------------------------------------------------

function NavSectionHorizontal({ data, config, sx, ...other }: NavSectionProps) {
  return (
    <Stack
      direction="row"
      sx={{
        mx: 'auto',
        ...hideScroll.y,
        ...sx,
      }}
      {...other}
    >
      {data.map((group, index) => (
        <Group
          key={group.subheader || index}
          items={group.items}
          config={navHorizontalConfig(config)}
        />
      ))}
    </Stack>
  );
}

export default memo(NavSectionHorizontal);

// ----------------------------------------------------------------------

type GroupProps = {
  items: NavItemProps[];
  config: NavConfigProps;
};

function Group({ items, config }: GroupProps) {
  
  return (
    <>
      {items.map((list) => (
        <NavList
          key={list.title + list.path}
          depth={1}
          hasChild={!!list.child}
          config={config} title={list.title} path={list.path} item={list}    />
      ))}
    </>
  );
}
