const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const CONTACT = 'Contact';

describe('The Contact Model', () => {
  describe('Requirement 1', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['phone', 'email']);
      const actualFields = getModelSortedFields(CONTACT);

      // THEN
      expectedFields.forEach(field => {
        expect(actualFields).toContain(field);
      });
    });

    it('has fields with the correct structures', () => {
      // GIVEN
      const commonFieldStructures = generateCommonFieldStructures();
      const expectedFieldStructures = {
        ...commonFieldStructures,
        phone: generateFieldStructure('String', false, true),
        email: generateFieldStructure('String', false, true),
      };
      const actualFieldStructures = getModelFieldsStructure(CONTACT);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });

  describe('Requirement 2', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['phone', 'email', 'customerId', 'customer']);
      const actualFields = getModelSortedFields(CONTACT);

      // THEN
      expectedFields.forEach(field => {
        expect(actualFields).toContain(field);
      });
    });

    it('has fields with the correct structures', () => {
      // GIVEN
      const commonFieldStructures = generateCommonFieldStructures();
      const expectedFieldStructures = {
        ...commonFieldStructures,
        phone: generateFieldStructure('String', false, true),
        email: generateFieldStructure('String', false, true),
        customerId: generateFieldStructure('Int', false, true, true),
        customer: generateFieldStructure('Customer', false, true, false,undefined, ['customerId'], ['id']),
      };
      const actualFieldStructures = getModelFieldsStructure(CONTACT);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });
});
