module.exports = function(sequelize, DataTypes) {
    var UserSession = sequelize.define("UserSession", {
        session: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    UserSession.associate = models => {
        UserSession.belongsTo(models.User);
    }

    return UserSession;
}