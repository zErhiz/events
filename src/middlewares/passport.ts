import passport from "passport"
import passportJwt from "passport-jwt"
import User from "../models/user"
import config from "../utils/config"

passport.use(
    new passportJwt.Strategy({
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.secret
    },				
    async (jwt_payload,done) => {
      
        try {				
            let user = await User.findOne({_id:jwt_payload.id})
            if (user) {		
                return done(null, user)
            } else {
                return done(null, false)
            }
        } catch (error) {
            console.log(error)
            return done(error,false)
        }
    }
))

export default passport