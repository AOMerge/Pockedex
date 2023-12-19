'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Users",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      role:{
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }
    } );
    await queryInterface.createTable("UserData",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      firstName:{
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName:{
        type: Sequelize.STRING,
        allowNull: false
      },
      address:{
        type: Sequelize.STRING,
        allowNull: false
      },
      phone:{
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    await queryInterface.createTable("Save", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      productId:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    await queryInterface.createTable("Likes",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      productId:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Users",{
      force: true,
      cascade: true
    });
    await queryInterface.dropTable("UserData",{
      force: true,
      cascade: true
    });
    await queryInterface.dropTable("Save",{
      force: true,
      cascade: true
    });
    await queryInterface.dropTable("Likes",{
      force: true,
      cascade: true
    });

  }
};
