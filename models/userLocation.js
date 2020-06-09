module.exports = function(sequelize, DataTypes) {
    var UserLocation = sequelize.define("UserLocation", {
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

        mask: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        withinSixFt: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });

    UserLocation.associate = models => {
        UserLocation.belongsTo(models.User);
        UserLocation.belongsTo(models.Location);
    };

    return UserLocation;
}