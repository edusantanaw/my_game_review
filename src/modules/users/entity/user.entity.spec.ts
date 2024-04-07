import { Roles } from 'src/shared/enums/roles';
import { UserEntity } from './user.entity';

describe('UserEntity', () => {
  test('Should create an random id if any value is not provided', () => {
    const user = new UserEntity({
      name: 'edu',
      email: 'edu@email.com',
      password: 'eduardo:123',
      deleted: false,
    });
    expect(user.id).not.toBe(undefined);
    expect(user.id).not.toBe(null);
  });

  test('Should set USER role by default', () => {
    const user = new UserEntity({
      name: 'edu',
      email: 'edu@email.com',
      password: 'eduardo:123',
      deleted: false,
    });
    expect(user.roles).not.toEqual([]);
    expect(user.roles).toEqual([Roles.USER]);
  });
});
