module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        // Type - eatery or outdoor recreation
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // Name
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Location
        location: {
            type: DataTypes.STRING,
            allow: false
        },
        // Street Address
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // City
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // State
        state: {
            type: DataTypes.STRING,
            allowNull: true,
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
    });

    Event.associate = models => {
        models.Event.hasMany(models.UserEvent, { onDelete: "cascade"});
        

    }

    return Event;
}