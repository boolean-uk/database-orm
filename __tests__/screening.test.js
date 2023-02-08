const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const SCREENING = 'Screening';

describe('The Screening Model', () => {

  it('has all of the necessary fields (columns)', () => {
    // GIVEN
    const expectedFields = generateSortedFields(['startsAt', 'movieId', 'movie', 'screenId', 'screen', 'tickets']);
    const actualFields = getModelSortedFields(SCREENING);

    // THEN
    expect(actualFields).toEqual(expectedFields);
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
    expect(expectedFieldStructures).toEqual(actualFieldStructures);
  });
});
