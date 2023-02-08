const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const TICKET = 'Ticket';

describe('The Ticket Model', () => {
  describe("Requirement 6", () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['customerId', 'customer', 'screeningId', 'screening']);
      const actualFields = getModelSortedFields(TICKET);

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
        customerId: generateFieldStructure('Int', false, true),
        customer: generateFieldStructure('Customer', false, true, undefined, ['customerId'], ['id']),
        screeningId: generateFieldStructure('Int', false, true),
        screening: generateFieldStructure('Screening', false, true, undefined, ['screeningId'], ['id']),
      };
      const actualFieldStructures = getModelFieldsStructure(TICKET);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });
});
