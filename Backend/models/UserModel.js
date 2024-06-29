import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

const userSchema =new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,

    },
    password:{
        type: String,
        required: true
    },
    pic:{
        type: String,
        default:"https://www.flaticon.com/free-icon/book_15313617?term=library&page=1&position=6&origin=tag&related_id=15313617"
    },

},{timestamps: true})

// userSchema.methods.matchPassword = async function (enteredPassword){
//     return await bcrypt.compare(enteredPassword, this.password)
// }

// //method for password encrypt and decrypt

// //pre means before saving
// //before saving user to our db its going to encrypt the password
// userSchema.pre('save', async function(next){
//     if(!this.isModified){
//         next()
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt)
// })

const User = mongoose.model("User", userSchema);

export default User;