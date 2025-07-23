import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true, 
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true, 
    }
}, {
    timestamps: true,
});

// Hash password before saving

UserSchema.pre('save',async function(next){
    if(!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})


export default mongoose.models.User || mongoose.model('User', UserSchema);
