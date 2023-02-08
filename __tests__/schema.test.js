const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const COMMON_FIELDS = ['id', 'createdAt', 'updatedAt'];

const generateSortedFields = (fields) => {
  return [...COMMON_FIELDS, ...fields].sort();
};

const getModelFields = (modelName) => {
  return prisma._dmmf.modelMap[modelName].fields;
};

const getModelSortedFields = (modelName) => {
  const fields = getModelFields(modelName);
  return fields.map(f => f.name).sort();
};

describe('The Prisma Schema', () => {
  it('has all of the required models (case sensitive!)', () => {
    // GIVEN
    const models = Object.keys(prisma._dmmf.modelMap);

    // THEN
    expect(models).toContain('Customer');
    expect(models).toContain('Contact');
    expect(models).toContain('Movie');
    expect(models).toContain('Screening');
    expect(models).toContain('Screen');
    expect(models).toContain('Customer');
  });

  describe('The Customer Model', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['name', 'contact']);
      const actualFields = getModelSortedFields('Customer');

      // THEN
      expect(actualFields).toEqual(expectedFields);
    });
  });
});
