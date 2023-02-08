const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const MOVIE = 'Movie';

describe('The Movie Model', () => {
  describe('Requirement 3', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['title', 'runtimeMins']);
      const actualFields = getModelSortedFields(MOVIE);

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
        title: generateFieldStructure('String', false, true),
        runtimeMins: generateFieldStructure('Int', false, true),
      };
      const actualFieldStructures = getModelFieldsStructure(MOVIE);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });

  describe('Requirement 4', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['title', 'runtimeMins', 'screenings']);
      const actualFields = getModelSortedFields(MOVIE);

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
        title: generateFieldStructure('String', false, true),
        runtimeMins: generateFieldStructure('Int', false, true),
        screenings: generateFieldStructure('Screening', false, true, undefined, [], [], true),
      };
      const actualFieldStructures = getModelFieldsStructure(MOVIE);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });
});
