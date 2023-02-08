const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('The Prisma Schema', () => {
  it('has all of the required models (case sensitive!)', () => {
    // GIVEN
    const models = Object.keys(prisma._dmmf.modelMap);

    // THEN
    expect(models).toContain('Customer');
    expect(models).toContain('Contact');
    expect(models).toContain('Movie');
    expect(models).toContain('Screening');
    expect(models).toContain('Screen');
    expect(models).toContain('Customer');
  });
});
