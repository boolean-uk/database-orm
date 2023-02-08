const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const CONTACT = 'Contact';

describe('The Contact Model', () => {

  it('has all of the necessary fields (columns)', () => {
    // GIVEN
    const expectedFields = generateSortedFields(['phone', 'email', 'customerId', 'customer']);
    const actualFields = getModelSortedFields(CONTACT);

    // THEN
    expect(actualFields).toEqual(expectedFields);
  });

  it('has fields with the correct structures', () => {
    // GIVEN
    const commonFieldStructures = generateCommonFieldStructures();
    const expectedFieldStructures = {
      ...commonFieldStructures,
      phone: generateFieldStructure('String', false, true),
      email: generateFieldStructure('String', false, true),
      customerId: generateFieldStructure('Int', false, true),
      customer: generateFieldStructure('Customer', false, true, undefined, ['customerId'], ['id']),
    };
    const actualFieldStructures = getModelFieldsStructure(CONTACT);

    // THEN
    expect(expectedFieldStructures).toEqual(actualFieldStructures);
  });
});
