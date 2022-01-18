# Database Seeding

Seeding is the process of populating a database with an initial set of data. It's commonly used among various technologies, frameworks and databases.

Database seeding is useful while developing software so the developer doesn't have to manually enter test data into a database before they can begin working on the code. Imagine if new hires to Amazon's development team had to manually create 50 products before they could run the project on their machine, nightmare!

Every tool will seed data in different ways, but commonly it's a simple function that runs when the developer types in a console command.

In Prisma, we can manually run seeds with `npx prisma db seed` - though this isn't needed for this exercise, since seeds are set up to run automatically when we run migrations.

Prisma has already been set up to use a seed file for you, but [you can read this documentation to learn how it was done](https://www.prisma.io/docs/guides/database/seed-database).