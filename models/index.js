const env = process.env.NODE_ENV || "development";
const Sequelize = require("sequelize");
const User = require("./user");
const Area = require("./area");
const Image = require("./image");
const PurposeArea = require("./purpose-area");
const Purpose = require("./purpose");
const BlockedNews = require("./blocked-news");
const config = require("../config/config")[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.User = User(sequelize, Sequelize.DataTypes);
db.Image = Image(sequelize, Sequelize.DataTypes);
db.PurposeArea = PurposeArea(sequelize, Sequelize.DataTypes);
db.Purpose = Purpose(sequelize, Sequelize.DataTypes);
db.Area = Area(sequelize, Sequelize.DataTypes);
db.BlockedNews = BlockedNews(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
