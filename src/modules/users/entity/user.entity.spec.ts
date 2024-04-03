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
});
