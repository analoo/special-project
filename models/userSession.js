module.exports = function(sequelize, Datatypes) {
    var UserSession = sequelize.define("UserSession", {
        session: {
            type: Datatypes.STRING,
            allowNull: false,
        }
    });

    UserSession.associate = models => {
        UserSession.belongsTo(models.User);
    }

    return UserSession;
}