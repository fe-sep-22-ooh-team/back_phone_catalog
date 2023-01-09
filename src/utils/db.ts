/* eslint-disable max-len */
import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

// export const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: true,
//     },
//   },
//   dialectModule: require('mysql2'),
// });

export const sequelize = new Sequelize('postgres://aaeubrfg:JGFl52_IUVp5Ll5rqLC0gZn1VQTFDnTp@rogue.db.elephantsql.com/aaeubrfg');
