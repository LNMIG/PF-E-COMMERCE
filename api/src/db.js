require('dotenv').config()
const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
let { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PGUSER, PGPASSWORD, PGHOST, PGDATABASE, PGPORT } = process.env

DB_USER = DB_USER || PGUSER
DB_PASSWORD = DB_PASSWORD || PGPASSWORD
DB_HOST = DB_HOST || PGHOST
DB_NAME = DB_NAME || PGDATABASE

const sequelize =
    process.env.NODE_ENV === 'production'
      ? new Sequelize({
        database: DB_NAME,
        dialect: 'postgres',
        host: DB_HOST,
        port: PGPORT || 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false
          },
          keepAlive: true
        },
        ssl: true
      })
      : new Sequelize(
            `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`,
            { logging: false, native: false }
      )

// const DB_URL = process.env.DATABASE_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/ecommerce`

// const sequelize = new Sequelize(DB_URL, {
//  logging: false, // set to console.log to see the raw SQL queries
//  native: false // lets Sequelize know we can use pg-native for ~30% more speed
// })

const basename = path.basename(__filename)
const modelDefiners = []

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

modelDefiners.forEach(model => model(sequelize))
const entries = Object.entries(sequelize.models)
const capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]])
sequelize.models = Object.fromEntries(capsEntries)

const { Category, Brand, Product, Role, User, UserAddress, UserPayment, Branch, Country, CartItem, Inventory, Order, OrderItem, PaymentType, Review } = sequelize.models//eslint-disable-line

// Aca vendrian las relaciones
Category.hasMany(Product, { foreignKey: { allowNull: false } })
Product.belongsTo(Category)

Brand.hasMany(Product, { foreignKey: { allowNull: false } })
Product.belongsTo(Brand)

User.hasMany(UserAddress)
UserAddress.belongsTo(User)

User.hasMany(UserPayment, { foreignKey: { allowNull: false } })
UserPayment.belongsTo(User)

PaymentType.hasMany(UserPayment)
UserPayment.belongsTo(PaymentType)

User.belongsToMany(Product, { through: 'review' })
Product.belongsToMany(User, { through: 'review' })

User.belongsToMany(Product, { through: 'cartItem' })
Product.belongsToMany(User, { through: 'cartItem' })

Product.belongsToMany(Branch, { as: 'Stock', through: 'inventory' })
Branch.belongsToMany(Product, { as: 'Stock', through: 'inventory' })

User.hasMany(Order, { foreignKey: { allowNull: false } })
Order.belongsTo(User)

UserPayment.hasMany(Order, { foreignKey: { allowNull: false } })
Order.belongsTo(UserPayment)

UserAddress.hasMany(Order)
Order.belongsTo(UserAddress)

Country.hasMany(UserAddress)
UserAddress.belongsTo(Country)

Country.hasMany(Branch)
Branch.belongsTo(Country)

Branch.hasMany(Order)
Order.belongsTo(Branch)

Product.belongsToMany(Order, { through: 'orderItem' })
Order.belongsToMany(Product, { through: 'orderItem' })

User.belongsToMany(Product, { through: 'wishList' })
Product.belongsToMany(User, { through: 'wishList' })

module.exports = {
  ...sequelize.models,
  conn: sequelize
}
