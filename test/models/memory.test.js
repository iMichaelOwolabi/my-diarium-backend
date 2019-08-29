import chai from 'chai';
import {
  checkModelName,
  checkPropertyExists,
  sequelize,
  dataTypes
} from 'sequelize-test-helpers'
import memoryModel from '../../db/models/memory';

const { expect } = chai;

describe('Memory model', () => {
  const Memory = memoryModel(sequelize, dataTypes);
  const memory = new Memory();

  context('properties', () => {
    ['memory', 'memoryDate', 'userId'].forEach(checkPropertyExists(memory));
  });
});
