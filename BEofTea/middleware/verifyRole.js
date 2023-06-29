

const verifyUserRole = (req, res, next) => {
  const allowedRoles = ['admin', 'Admin']; // Define the allowed roles here
  console.log(req.roles)
  if (!req.roles || !allowedRoles.includes(req.roles)) {
    return res.status(403).json({ message: 'Forbidden - Only admin can do this' })
  }

  next();
};

module.exports = verifyUserRole 