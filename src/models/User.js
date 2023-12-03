import bcrypt from "bcrypt";

const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: pass => {
            if (!pass?.length || pass?.length < 5) {
                new Error('Passwords must be at least 5 characters')
            }
            return pass = 'test1234';
        }
    },
}, { timestamps: true })

// UserSchema.pre('save', (next, ...rest) => {
//     console.log(rest);
//     next();
// })

UserSchema.post('validate', function (user) {
    const notHashedPass = user.password;
    // const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    user.password = bcrypt.hashSync(notHashedPass, salt);
})

export const User = models?.User || model('User', UserSchema)