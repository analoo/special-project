module.exports = function(sequelize, DataTypes) {
    var UserEvent = sequelize.define("UserEvent", {
        color: {
            type: DataTypes.STRING,
            defaultValue: "grey"
        },
        
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
            defaultValue: "none"
        },

        mask: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        sixFeet: {
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
            defaultValue: "none"
        },
        startMonth: {
            type: DataTypes.INTEGER

        },
        startDay: {
            type: DataTypes.INTEGER

        },
        startYear: {
            type: DataTypes.INTEGER


        }

    });

    UserEvent.associate = models => {
        UserEvent.belongsTo(models.User);
        UserEvent.belongsTo(models.Event);
    };

    return UserEvent;
}