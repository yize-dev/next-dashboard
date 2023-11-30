'use client'
import { useState, useEffect, useCallback, ReactNode } from 'react';
// @mui
import Collapse from '@mui/material/Collapse';
// routes
import { usePathname } from 'next/navigation';
import { useActiveLink } from '@/routes/hooks/use-active-link';
//
import { NavListProps, NavConfigProps, NavListRootProps, NavItemProps} from '../types';
import NavItem from './nav-item';

// ----------------------------------------------------------------------


export default function NavList({ item, depth, hasChild, config }: NavItemProps) {
  const pathname = usePathname();
  const data = item;
  const active = useActiveLink(data.path, hasChild);

  const externalLink = data.path.includes('http');

  const [open, setOpen] = useState(active);

  useEffect(() => {
    if (!active) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        active={active}
        externalLink={externalLink}
        onClick={handleToggle}
        config={config} title={data.title} path={data.path}  hasChild={hasChild}       />
      
      {hasChild && (
        <Collapse in={open} unmountOnExit>
          <NavSubList data={data.child} depth={depth} config={config} />
        </Collapse>
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
      <>
        {data.map((list) => (
          <NavList
            key={list.title + list.path}
            depth={depth + 1}
            hasChild={!!list.child}
            config={config} title={list.title} path={list.path} item={list}        />
        ))}
      </>
    );
  } else {
    return <></>;
  }
}
