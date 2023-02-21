const { getModelNames } = require('./helpers');

describe('The Prisma Schema',() => {
  const models = getModelNames();

  describe('Requirement 1 Requirement 2', () => {
    it('has all of the required models (case sensitive!)', () => {
      expect(models).toContain('Customer');
      expect(models).toContain('Contact');
    });
  });

  describe('Requirement 3 Requirement 4', () => {
    it('has all of the required models (case sensitive!)', () => {
      expect(models).toContain('Customer');
      expect(models).toContain('Contact');
      expect(models).toContain('Movie');
      expect(models).toContain('Screening');
    });
  });

  describe('Requirement 5', () => {
    it('has all of the required models (case sensitive!)', () => {
      expect(models).toContain('Customer');
      expect(models).toContain('Contact');
      expect(models).toContain('Movie');
      expect(models).toContain('Screening');
      expect(models).toContain('Screen');
    });
  });

  describe('Requirement 6', () => {
    it('has all of the required models (case sensitive!)', () => {
      expect(models).toContain('Customer');
      expect(models).toContain('Contact');
      expect(models).toContain('Movie');
      expect(models).toContain('Screening');
      expect(models).toContain('Screen');
      expect(models).toContain('Customer');
      expect(models).toContain('Ticket');
    });
  });
});
