'use client'
import { memo } from 'react';
import Stack from '@mui/material/Stack';
//
import { NavSectionBaseProps, NavListProps, NavConfigProps, NavItemBaseProps} from '../types';
import { navMiniConfig } from '../config';
import NavList from './nav-list';

// ----------------------------------------------------------------------

function NavSectionMini({ data, config, sx, ...other }: NavSectionBaseProps) {
  return (
    <Stack sx={sx} {...other}>
      {data.map((group, index) => (
        <Group key={group.subheader || index} items={group.items} config={navMiniConfig(config)} subheader={group.subheader}  />
      ))}
    </Stack>
  );
}

export default memo(NavSectionMini);

// ----------------------------------------------------------------------

type GroupProps = {
  subheader: string | undefined;
  items: NavItemBaseProps[];
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
          config={config} title={list.title} path={list.path} item={list}        />
      ))}
    </>
  );
}
