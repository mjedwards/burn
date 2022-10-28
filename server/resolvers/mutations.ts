import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ApolloServerErrorCode } from '@apollo/server/errors';

import {
  validateRegisterInput,
  validateLoginInput
} from '../util/validators.js';
import { SECRET_KEY } from '../config';
import User from '../models/User.js';

function generateToken(user: { id: any; email: any; username: any; }) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
}

export const gqlUserAuth = {
  Mutation: {
    async login(_: any, { username, password }: any) {
      const { valid, errors } = validateLoginInput(username, password);

      if (!valid) {
        throw new errors;
      }

      const user = await User.findOne({ username });

      if (!user) {
        errors.general = 'User not found';
        throw new errors.general;
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong crendetials';
        throw new errors.general;
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token
      };
    },
    async register(
      _: any,
      {
        registerInput: { username, email, password, confirmPassword }
      }: any
    ) {
      // Validate user data
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new errors;
      }
      // TODO: Make sure user doesnt already exist
      const user = await User.findOne({ username });
      if (user) {
        throw new Error;
      }
      // hash password and create an auth token
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString()
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token
      };
    }
  }
};