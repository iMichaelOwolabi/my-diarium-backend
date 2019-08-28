import {
  sequelize,
  dataTypes,
  checkPropertyExists,
  checkModelName,
} from 'sequelize-test-helpers';
import chai from 'chai';
import userModel from '../../db/models/user';
import Memory from '../../db/models/memory';

const { expect } = chai;

describe('user model', () => {
  const User = userModel(sequelize, dataTypes)
  const user = new User();

  checkModelName(User)('User');
  context('model properties', () => {
    ['firstName', 'lastName', 'email', 'profileImage'].forEach(checkPropertyExists(user));
  });

  context('check Association', () => {
    before(() => {
      User.associate({ Memory });
    });
    it('defines a hasMany association with Memory', () => {
      expect(User.hasMany.calledWith(Memory)).to.equal(true);
    })
  })
});
