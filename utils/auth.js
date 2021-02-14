// Checks if User is logged in or not and redirects to login page if they are not
// Prevents non-users from accessing pages they are not allowed to
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;