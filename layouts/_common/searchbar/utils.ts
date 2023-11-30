// utils
import { flattenArray } from '@/utils/flatten-array';
// components
import { NavListProps, NavSectionProps } from '@/components/nav-section';
import { NavSectionSearchBarProps, NavItemProps } from '@/components/nav-section/types';

// ----------------------------------------------------------------------

type ItemProps = {
  group: string;
  title: string;
  path: string;
};

export function getAllItems({ data }: NavSectionSearchBarProps) {
  const reduceItems = data.map((list) => handleLoop(list.items, list.subheader)).flat();

  const items = flattenArray(reduceItems).map((option) => {
    const group = splitPath(reduceItems, option.path);

    return {
      group: group && group.length > 1 ? group[0] : option.subheader,
      title: option.title,
      path: option.path,
    };
  });

  return items;
}

// ----------------------------------------------------------------------

type FilterProps = {
  inputData: ItemProps[];
  query: string;
};

export function applyFilter({ inputData, query }: FilterProps) {
  if (query) {
    inputData = inputData.filter(
      (item) =>
        item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        item.path.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  return inputData;
}

// ----------------------------------------------------------------------

export function splitPath(array: NavItemProps[], key: string) {
  let stack = array.map((item) => ({
    path: [item.title],
    currItem: item,
  }));

  while (stack.length) {
    const { path, currItem } = stack.pop() as {
      path: string[];
      currItem: NavItemProps;
    };

    if (currItem.path === key) {
      return path;
    }

    if (currItem.child?.length) {
      stack = stack.concat(
        currItem.child.map((item: NavItemProps) => ({
          path: path.concat(item.title),
          currItem: item,
        }))
      );
    }
  }
  return null;
}

// ----------------------------------------------------------------------

export function handleLoop(array: any, subheader?: string) {
  return array?.map((list: any) => ({
    subheader,
    ...list,
    ...(list.child && {
      child: handleLoop(list.child, subheader),
    }),
  }));
}

// ----------------------------------------------------------------------

type GroupsProps = {
  [key: string]: ItemProps[];
};

export function groupedData(array: ItemProps[]) {
  const group = array.reduce((groups: GroupsProps, item) => {
    groups[item.group] = groups[item.group] || [];

    groups[item.group].push(item);

    return groups;
  }, {});

  return group;
}
