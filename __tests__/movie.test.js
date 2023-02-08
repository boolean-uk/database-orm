const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const MOVIE = 'Movie';

describe('The Movie Model', () => {

  it('has all of the necessary fields (columns)', () => {
    // GIVEN
    const expectedFields = generateSortedFields(['title', 'runtimeMins']);
    const actualFields = getModelSortedFields(MOVIE);

    // THEN
    expect(actualFields).toEqual(expectedFields);
  });

  it('has fields with the correct structures', () => {
    // GIVEN
    const commonFieldStructures = generateCommonFieldStructures();
    const expectedFieldStructures = {
      ...commonFieldStructures,
      title: generateFieldStructure('String', false, true, undefined),
      runtimeMins: generateFieldStructure('Int', false, true, undefined),
    };
    const actualFieldStructures = getModelFieldsStructure(MOVIE);

    // THEN
    expect(expectedFieldStructures).toEqual(actualFieldStructures);
  });
});
