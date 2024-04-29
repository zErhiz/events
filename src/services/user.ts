import User from '../models/user';
import bcrypt from 'bcrypt';
import  jwt  from 'jsonwebtoken'
import config from '../utils/config';
async function upsertUser(userData: any) {
  try {
    const { email, password, ...rest } = userData;

    let user = await User.findOne({ email });

    if (user) {
      user.set({ ...rest });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({
        email,
        password: hashedPassword,
        ...rest
      });
    }

    await user.save();

    return user;
  } catch (err) {
    throw new Error('Error while upsert user: ' + err);
  }
}

async function signInUser(email: string, password: string) {
    try {
      const user = await User.findOne({ email });
  
    if (!user) {
        throw new Error('incorrect email');
    }

    const isPasswordValid = await bcrypt.compare(password, user.get('password'));

    if (!isPasswordValid) {
        throw new Error('incorrect password');
    }

    const token = jwt.sign(
        { userId: user.get('_id'), email: user.get('email') },
        config.secret,
        { expiresIn: 60 * 60 * 24 }
    );
  
      return { user, token };
    } catch (error) {
      throw new Error('Error while signIn: ' + error);
    }
  }


export default {
  upsertUser,
  signInUser
};