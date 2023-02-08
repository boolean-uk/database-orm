const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const SCREENING = 'Screening';

describe('The Screening Model', () => {
  describe('Requirement 3', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['startsAt']);
      const actualFields = getModelSortedFields(SCREENING);

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
        startsAt: generateFieldStructure('DateTime', false, true),
      };
      const actualFieldStructures = getModelFieldsStructure(SCREENING);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });

  describe('Requirement 4', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['startsAt', 'movieId', 'movie']);
      const actualFields = getModelSortedFields(SCREENING);

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
        startsAt: generateFieldStructure('DateTime', false, true),
        movieId: generateFieldStructure('Int', false, true),
        movie: generateFieldStructure('Movie', false, true, undefined, ['movieId'], ['id']),
      };
      const actualFieldStructures = getModelFieldsStructure(SCREENING);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });

  describe('Requirement 5', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['startsAt', 'movieId', 'movie', 'screenId', 'screen']);
      const actualFields = getModelSortedFields(SCREENING);

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
        startsAt: generateFieldStructure('DateTime', false, true),
        movieId: generateFieldStructure('Int', false, true),
        movie: generateFieldStructure('Movie', false, true, undefined, ['movieId'], ['id']),
        screenId: generateFieldStructure('Int', false, true),
        screen: generateFieldStructure('Screen', false, true, undefined, ['screenId'], ['id']),
      };
      const actualFieldStructures = getModelFieldsStructure(SCREENING);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });

  describe('Requirement 6', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['startsAt', 'movieId', 'movie', 'screenId', 'screen', 'tickets']);
      const actualFields = getModelSortedFields(SCREENING);

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
        startsAt: generateFieldStructure('DateTime', false, true),
        movieId: generateFieldStructure('Int', false, true),
        movie: generateFieldStructure('Movie', false, true, undefined, ['movieId'], ['id']),
        screenId: generateFieldStructure('Int', false, true),
        screen: generateFieldStructure('Screen', false, true, undefined, ['screenId'], ['id']),
        tickets: generateFieldStructure('Ticket', false, true, undefined, [], [], true),
      };
      const actualFieldStructures = getModelFieldsStructure(SCREENING);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });
});
