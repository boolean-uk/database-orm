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
    const expectedFields = generateSortedFields(['startsAt']);
    const actualFields = getModelSortedFields(SCREENING);

    // THEN
    expect(actualFields).toEqual(expectedFields);
  });

  it('has fields with the correct structures', () => {
    // GIVEN
    const commonFieldStructures = generateCommonFieldStructures();
    const expectedFieldStructures = {
      ...commonFieldStructures,
      startsAt: generateFieldStructure('DateTime', false, true, undefined),
    };
    const actualFieldStructures = getModelFieldsStructure(SCREENING);

    // THEN
    expect(expectedFieldStructures).toEqual(actualFieldStructures);
  });
});
