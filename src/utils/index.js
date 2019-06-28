export const getNumericPermissions = (levels = {}) => {
  const { group, others, owner } = levels;

  if (
    group === undefined ||
    others === undefined ||
    owner === undefined
  ) {
    throw new Error(
      'User classes must be objects containing permissions'
    );
  }

  return `${getNumericValue(owner)}${getNumericValue(
    group
  )}${getNumericValue(others)}`;
};

export const getNumericValue = (permissions = {}) => {
  const { execute, read, write } = permissions;

  if (
    typeof execute !== 'boolean' ||
    typeof read !== 'boolean' ||
    typeof write !== 'boolean'
  ) {
    throw new Error('Permissions must be booleans');
  }

  return read * 4 + write * 2 + execute;
};

export const getSymbolicPermissions = (levels = {}) => {
  const { group, others, owner } = levels;

  if (
    group === undefined ||
    others === undefined ||
    owner === undefined
  ) {
    throw new Error(
      'User classes must be objects containing permissions'
    );
  }

  return `-${getSymbolicValue(owner)}${getSymbolicValue(
    group
  )}${getSymbolicValue(others)}`;
};

export const getSymbolicValue = (permissions = {}) => {
  const { execute, read, write } = permissions;

  if (
    typeof execute !== 'boolean' ||
    typeof read !== 'boolean' ||
    typeof write !== 'boolean'
  ) {
    throw new Error('Permissions must be booleans');
  }

  return `${read ? 'r' : '-'}${write ? 'w' : '-'}${
    execute ? 'x' : '-'
  }`;
};
