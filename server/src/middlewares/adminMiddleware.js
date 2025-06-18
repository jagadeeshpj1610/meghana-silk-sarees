const adminMiddleware = (req, res, next) => {
  try {
    const user = res.user;
    if(user.role !== 'admin'){
      return res.status(403).json({message: "yo bro, You are not an admin to do this"});
    }
    next();
  } catch (err) {
    console.log(err)
    res.status(400).json({message: "Internal Server Error"})
  }
}

export default adminMiddleware
