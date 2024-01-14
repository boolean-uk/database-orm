const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const SCREEN = 'Screen';
describe('The Screen Model', () => {
  describe('Requirement 5', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['number', 'screenings']);
      const actualFields = getModelSortedFields(SCREEN);

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
        number: generateFieldStructure('Int', false, true),
        screenings: generateFieldStructure('Screening', false, true, false, undefined, [], [], true),
      };
      const actualFieldStructures = getModelFieldsStructure(SCREEN);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });
});
