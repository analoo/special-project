// Contruct User Model
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // User Name (first and last)
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        // User Email
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        // User Phone Number
        number: {
            type: DataTypes.STRING, // or INT
            allowNull: true,
            unique: true,
            validate: {
                // 10 digits
            }
        },
        // Zipcode
        zipcode: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [5, 5]
            }
        },

        // password
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = models => {
        models.User.hasMany(models.UserEvent);
        models.User.hasMany(models.UserSession);

    }

    return User;
}