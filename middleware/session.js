module.exports = {
    api: {
        admin: function (req, res, next) {
            if (req.session.user.role.includes('admin')) {
                next();
            } else {
                res.json({
                    error: 403
                });
            }
        },
        user: function (req, res, next) {
            if (req.session.user.role.includes('user')) {
                next();
            } else {
                res.json({
                    error: 403
                });
            }
        }
    },
    page: {
        admin: function (req, res, next) {
            if (req.session.user.role.includes('admin')) {
                next();
            } else {
                res.redirect('/login');
            }
        },
        user: function (req, res, next) {
            if (req.session.user.role.includes('user')) {
                next();
            } else {
                res.redirect('/login');
            }
        }
    }

}