module.exports = function(sequelize, DataTypes) {
    var UserEvent = sequelize.define("UserEvent", {
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        startTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },

        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        endTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        contacts: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        mask: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        withinSixFt: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        outside: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    });

    UserEvent.associate = models => {
        UserEvent.belongsTo(models.User);
        UserEvent.belongsTo(models.Event);
    };

    return UserEvent;
}