const {
  generateCommonFieldStructures,
  generateFieldStructure,
  generateSortedFields,
  getModelFieldsStructure,
  getModelNames,
  getModelSortedFields,
} = require('./helpers');


describe('The Prisma Schema', () => {
  it('has all of the required models (case sensitive!)', () => {
    // GIVEN
    const models = getModelNames();

    // THEN
    expect(models).toContain('Customer');
    expect(models).toContain('Contact');
    expect(models).toContain('Movie');
    expect(models).toContain('Screening');
    expect(models).toContain('Screen');
    expect(models).toContain('Customer');
  });

  describe('The Customer Model', () => {
    const CUSTOMER = 'Customer';

    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['name', 'contact']);
      const actualFields = getModelSortedFields(CUSTOMER);

      // THEN
      expect(actualFields).toEqual(expectedFields);
    });

    it('has fields with the correct structures', () => {
      // GIVEN
      const commonFieldStructures = generateCommonFieldStructures();
      const expectedFieldStructures = {
        ...commonFieldStructures,
        name: generateFieldStructure('String', false, true, undefined),
        contact: generateFieldStructure('Contact', false, false, undefined),
      };
      const actualFieldStructures = getModelFieldsStructure(CUSTOMER);

      // THEN
      expect(expectedFieldStructures).toEqual(actualFieldStructures);
    });
  });

  describe('The Contact Model', () => {
    const CONTACT = 'Contact';

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
        phone: generateFieldStructure('String', false, true, undefined),
        email: generateFieldStructure('String', false, true, undefined),
        customerId: generateFieldStructure('Int', false, true, undefined),
        customer: generateFieldStructure('Customer', false, true, undefined),
      };
      const actualFieldStructures = getModelFieldsStructure(CONTACT);

      // THEN
      expect(expectedFieldStructures).toEqual(actualFieldStructures);
    });  })
});
