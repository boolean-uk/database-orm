const {
  generateSortedFields,
  getModelSortedFields,
  generateCommonFieldStructures,
  generateFieldStructure,
  getModelFieldsStructure
} = require('./helpers');

const CUSTOMER = 'Customer';

describe('The Customer Model', () => {
  describe('Requirement 1', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['name']);
      const actualFields = getModelSortedFields(CUSTOMER);

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
        name: generateFieldStructure('String', false, true),
      };
      const actualFieldStructures = getModelFieldsStructure(CUSTOMER);

      // THEN 
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });

  describe('Requirement 2', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['name', 'contact']);
      const actualFields = getModelSortedFields(CUSTOMER);

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
        name: generateFieldStructure('String', false, true),
        contact: generateFieldStructure('Contact', false, false, false, undefined, [], []),
      };
      const actualFieldStructures = getModelFieldsStructure(CUSTOMER);

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  });

  describe('Requirement 6', () => {
    it('has all of the necessary fields (columns)', () => {
      // GIVEN
      const expectedFields = generateSortedFields(['name', 'contact']);
      const actualFields = getModelSortedFields(CUSTOMER);

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
        name: generateFieldStructure('String', false, true),
        contact: generateFieldStructure('Contact', false, false, false, undefined, [], []),
        // tickets: generateFieldStructure('Ticket', false, true, false, undefined, [], []),
      };
      
      
       const actualFieldStructures = getModelFieldsStructure(CUSTOMER);
      

      // THEN
      expect(actualFieldStructures).toMatchObject(expectedFieldStructures);
    });
  })
});
