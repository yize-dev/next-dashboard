"use client"

import { useState, useEffect, useRef, ReactNode } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import { appBarClasses } from '@mui/material/AppBar';
// routes
import { usePathname } from 'next/navigation';
import { useActiveLink } from '@/routes/hooks/use-active-link';
//
import { NavListProps, NavConfigProps, NavListRootProps, NavItemProps} from '../types';
import NavItem from './nav-item';



export default function NavList({ item, depth, hasChild, config }: NavItemProps) {
  const navRef = useRef(null);

  const pathname = usePathname();
  const data = item;

  const active = useActiveLink(data.path, hasChild);

  const externalLink = data.path.includes('http');

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const appBarEl = Array.from(
      document.querySelectorAll(`.${appBarClasses.root}`)
    ) as Array<HTMLElement>;

    // Reset styles when hover
    const styles = () => {
      document.body.style.overflow = '';
      document.body.style.padding = '';
      // Apply for Window
      appBarEl.forEach((elem) => {
        elem.style.padding = '';
      });
    };

    if (open) {
      styles();
    } else {
      styles();
    }
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavItem
        ref={navRef}
        item={data}
        depth={depth}
        open={open}
        active={active}
        externalLink={externalLink}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        config={config} title={data.title} path={data.path} hasChild={hasChild}      />

      {hasChild && (
        <Popover
          open={open}
          anchorEl={navRef.current}
          anchorOrigin={
            depth === 1
              ? { vertical: 'bottom', horizontal: 'left' }
              : { vertical: 'center', horizontal: 'right' }
          }
          transformOrigin={
            depth === 1
              ? { vertical: 'top', horizontal: 'left' }
              : { vertical: 'center', horizontal: 'left' }
          }
          slotProps={{
            paper: {
              onMouseEnter: handleOpen,
              onMouseLeave: handleClose,
              sx: {
                width: 160,
                ...(open && {
                  pointerEvents: 'auto',
                }),
              },
            },
          }}
          sx={{
            pointerEvents: 'none',
          }}
        >
          <NavSubList data={data.child} depth={depth} config={config} />
        </Popover>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type NavListSubProps = {
  data: NavItemProps[] | undefined;
  depth: number;
  config: NavConfigProps;
};

function NavSubList({ data, depth, config }: NavListSubProps) {
  if (data) {
    return (
      <Stack spacing={0.5}>
        {data.map((list) => (
          <NavList
            key={list.title + list.path}
            depth={depth + 1}
            hasChild={!!list.child}
            config={config} title={list.title} path={list.path} item={list} />
        ))}
      </Stack>
    );
  } else {
    return <></>;
  }
}
