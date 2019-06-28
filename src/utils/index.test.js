import { getNumericPermissions, getSymbolicPermissions } from '.';

describe('getNumericPermissions()', () => {
  it('returns a string', () => {
    const permissions = getNumericPermissions({
      owner: {
        read: false,
        write: false,
        execute: false,
      },
      group: {
        read: false,
        write: false,
        execute: false,
      },
      others: {
        read: false,
        write: false,
        execute: false,
      },
    });

    expect(typeof permissions).toBe('string');
  });

  it('returns the correct permission', () => {
    const permissions = getNumericPermissions({
      owner: {
        read: true,
        write: true,
        execute: true,
      },
      group: {
        read: true,
        write: false,
        execute: true,
      },
      others: {
        read: true,
        write: false,
        execute: true,
      },
    });

    expect(permissions).toBe('755');
  });

  it('throws if user levels are empty', () => {
    expect(() => getNumericPermissions({})).toThrowError(
      /must be objects containing permissions/
    );
  });

  it('throws if permissions are not booleans', () => {
    expect(() =>
      getNumericPermissions({
        owner: {
          read: 'invalid',
          write: true,
          execute: true,
        },
        group: {
          read: true,
          write: false,
          execute: true,
        },
        others: {
          read: true,
          write: false,
          execute: true,
        },
      })
    ).toThrowError(/must be booleans/);
  });
});

describe('getSymbolicPermissions()', () => {
  it('returns a string', () => {
    const permissions = getSymbolicPermissions({
      owner: {
        read: false,
        write: false,
        execute: false,
      },
      group: {
        read: false,
        write: false,
        execute: false,
      },
      others: {
        read: false,
        write: false,
        execute: false,
      },
    });

    expect(typeof permissions).toBe('string');
  });

  it('returns the correct permission', () => {
    const permissions = getSymbolicPermissions({
      owner: {
        read: true,
        write: true,
        execute: true,
      },
      group: {
        read: true,
        write: false,
        execute: true,
      },
      others: {
        read: true,
        write: false,
        execute: true,
      },
    });

    expect(permissions).toBe('-rwxr-xr-x');
  });

  it('throws if user levels are empty', () => {
    expect(() => getSymbolicPermissions({})).toThrowError(
      /must be objects containing permissions/
    );
  });

  it('throws if permissions are not booleans', () => {
    expect(() =>
      getSymbolicPermissions({
        owner: {
          read: 'invalid',
          write: true,
          execute: true,
        },
        group: {
          read: true,
          write: false,
          execute: true,
        },
        others: {
          read: true,
          write: false,
          execute: true,
        },
      })
    ).toThrowError(/must be booleans/);
  });
});
