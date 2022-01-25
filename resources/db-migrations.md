# Database Migrations

Database migrations are sets of changes used to modify the structure of a database as an application is developed. This could be anything from simply renaming a column, all the way to dropping a table or creating a new one entirely.

We can think of it like a Git history for our database - every change we make to the database structure is recorded so we can go back in time to when our database looked a certain way. If you were to look at the `prisma/migrations/` directory, you'll see a list of folders that each contain a `migration.sql` file. These contain standard SQL queries, such as creating the Customer table or adding a relationship between the Customer and Contact tables.

As you work through this exercise, the list of migrations will increase. Check the folder again after working through a requirement to see the migration that gets created based on your schema updates.

Every time we run a migrate command, prisma will go through these steps:
1. Deletes all of the data and drops every table
2. Runs each migration in sequence to recreate the database structure
3. Runs the seed file in this project to populate the database with the data you define in that file

This process ensures you have an up-to-date database structure and collection of data to work with.

Let's use the example of an Amazon developer joining their team; how much time and effort would it take if every new developer had to manually create a database before they could start working on the project? With migrations, they can simply run a command to create the database for them.