const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const CUSTOMER = 'Customer';

describe('The Customer Model', () => {

  it('has all of the necessary fields (columns)', () => {
    // GIVEN
    const expectedFields = generateSortedFields(['name', 'contact', 'tickets']);
    const actualFields = getModelSortedFields(CUSTOMER);

    // THEN
    expect(actualFields).toEqual(expectedFields);
  });

  it('has fields with the correct structures', () => {
    // GIVEN
    const commonFieldStructures = generateCommonFieldStructures();
    const expectedFieldStructures = {
      ...commonFieldStructures,
      name: generateFieldStructure('String', false, true),
      contact: generateFieldStructure('Contact', false, false, undefined, [], []),
      tickets: generateFieldStructure('Ticket', false, true, undefined, [], [], true),
    };
    const actualFieldStructures = getModelFieldsStructure(CUSTOMER);

    // THEN
    expect(expectedFieldStructures).toEqual(actualFieldStructures);
  });
});
