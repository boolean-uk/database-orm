# Database Transactions

When we're not completely confident that the query we're about to run is going to result in the desired outcome, we can execute that query as a transaction which can then either be committed to or rolled back.

Consider a scenario where a bank manager wants to update a specific customer's details without affecting anybody else's, but she isn't completely comfortable with SQL.

```sql
UPDATE Customers
SET name = 'Rick Sanchez'
RETURNING *;
```

If the bank manager were to run the above query, **every** record in that table would end up with a name of Rick Sanchez.

There is a way for her to check that her query is doing the right thing before she commits to it: a transaction!

We define a block of SQL as a transaction by adding the `BEGIN` keyword to the top of our query. We can rollback anything in the transaction by using the `ROLLBACK` keyword.

```sql
BEGIN;

UPDATE Customers
SET name = 'Rick Sanchez'
RETURNING *;

ROLLBACK;
```

By adding `BEGIN` to the top and `ROLLBACK` to the bottom, this query is now safe to run. The `RETURNING *` will show us all of the affected records that were touched by the `UPDATE` query.

This transaction will run, update the records, show us the result, and then undo the query. We'll be able to see exactly what our query changes without worrying about things going wrong! Once the bank manager has seen that every record gets affected, she can change the query to include a `WHERE` clause:

```sql
BEGIN;

UPDATE Customers
SET name = 'Rick Sanchez'
WHERE id = 1
RETURNING *;

ROLLBACK;
```

Running the above query, still in a transaction that gets rolled back, we'll see that only the customer with an ID of 1 will have their name updated. Now we know the query runs correctly, we can commit to it by changing `ROLLBACK` to `COMMIT`!

```sql
BEGIN;

UPDATE Customers
SET name = 'Rick Sanchez'
WHERE id = 1
RETURNING *;

COMMIT;
```

Transactions work for any query, including creating and dropping tables. This is how most ORM's will test migrations before committing to them.
