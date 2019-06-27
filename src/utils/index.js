export const getNumericPermissions = ({ owner, group, others }) =>
  `${getNumericValue(owner)}${getNumericValue(
    group
  )}${getNumericValue(others)}`;

export const getNumericValue = user =>
  user.read * 4 + user.write * 2 + user.execute;

export const getSymbolicPermissions = ({ owner, group, others }) =>
  `-${getSymbolicValue(owner)}${getSymbolicValue(
    group
  )}${getSymbolicValue(others)}`;

export const getSymbolicValue = user =>
  `${user.read ? 'r' : '-'}${user.write ? 'w' : '-'}${
    user.execute ? 'x' : '-'
  }`;
