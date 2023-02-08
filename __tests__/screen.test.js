const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const SCREEN = 'Screen';

describe('The Screen Model', () => {

  it('has all of the necessary fields (columns)', () => {
    // GIVEN
    const expectedFields = generateSortedFields(['number', 'screenings']);
    const actualFields = getModelSortedFields(SCREEN);

    // THEN
    expect(actualFields).toEqual(expectedFields);
  });

  it('has fields with the correct structures', () => {
    // GIVEN
    const commonFieldStructures = generateCommonFieldStructures();
    const expectedFieldStructures = {
      ...commonFieldStructures,
      number: generateFieldStructure('Int', false, true),
      screenings: generateFieldStructure('Screening', false, true, undefined, [], [], true),
    };
    const actualFieldStructures = getModelFieldsStructure(SCREEN);

    // THEN
    expect(expectedFieldStructures).toEqual(actualFieldStructures);
  });
});
