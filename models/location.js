module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        // Type - eatery or outdoor recreation
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Name
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Street Address
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // City
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // State
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,2]
            }
        },
        // Zipcode
        zipcode: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [5,5]
            }
        },
        // Capacity
        capacity: {
            type: DataTypes.INTEGER
        }

    });

    Location.associate = models => {
        models.Location.hasMany(models.UserLocation);

    }

    return Location;
}