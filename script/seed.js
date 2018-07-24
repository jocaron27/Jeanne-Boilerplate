/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('Database synced')

  const users = await Promise.all([
    User.create({email: 'liz@email.com', password: '123'}),
    User.create({email: 'joe@email.com', password: '123'})
  ])

  console.log(`Seeded ${users.length} users`)
  console.log(`Seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('Closing database connection')
    db.close()
    console.log('Database connection closed')
  })

console.log('Seeding data')
