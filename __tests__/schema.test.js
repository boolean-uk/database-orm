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

const generateFieldStructure = (type, isId, isRequired, defaultValue) => ({
  type,
  isId,
  isRequired,
  defaultValue,
});

const generateCommonFieldStructures = () => ({
  id: generateFieldStructure('Int', true, true, { name: 'autoincrement', args: [] }),
  createdAt: generateFieldStructure('DateTime', false, true, { name: 'now', args: []}),
  updatedAt: generateFieldStructure('DateTime', false, true, undefined),
});

const getModelFieldsStructure = (modelName) => {
  const fields = getModelFields(modelName);
  const res = {};

  fields.map(field => {
    const { name, type, isId, isRequired, default: defaultValue } = field;
    res[name] = {
      type,
      isId,
      isRequired,
      defaultValue
    };
  });

  return res;
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
    const CUSTOMER = 'Customer';

    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['name', 'contact']);
      const actualFields = getModelSortedFields(CUSTOMER);

      // THEN
      expect(actualFields).toEqual(expectedFields);
    });

    it('has fields with the correct structures', () => {
      // GIVEN
      const commonFieldStructures = generateCommonFieldStructures();
      const expectedFieldStructures = {
        ...commonFieldStructures,
        name: generateFieldStructure('String', false, true, undefined),
        contact: generateFieldStructure('Contact', false, false, undefined),
      };
      const actualFieldStructures = getModelFieldsStructure(CUSTOMER);

      // THEN
      expect(expectedFieldStructures).toEqual(actualFieldStructures);
    });
  });
});
