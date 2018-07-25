const log = require('loglevel');
const db = require('../server/db');
const {User} = require('../server/db/models');

log.enableAll();

async function seed () {
  await db.sync({force: true})
  log.info('Database synced')

  const users = await Promise.all([
    User.create({email: 'liz@email.com', password: '123'}),
    User.create({email: 'joe@email.com', password: '123'})
  ])

  log.info(`Seeded ${users.length} users`)
  log.info(`Seeded successfully`)
}

seed()
  .catch(err => {
    log.error(err.message)
    log.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    log.info('Closing database connection')
    db.close()
    log.info('Database connection closed')
  })

log.info('Seeding data')
