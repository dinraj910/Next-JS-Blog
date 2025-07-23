import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { connectDb } from "@/lib/mongodb";

export async function POST(req){
    try{
        await connectDb();

        const {email,password} = await req.json();

        if(!email || !password){
            return NextResponse.json({error: "Email and password are required"}, {status: 400});
        }

        // 1. Find user

        const user = await User.findOne({email});

        if(!user){
            return NextResponse.json({error: "Invalid email or password 1"}, {status: 401});
        }

        // 2. Compare Password

        /*const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return NextResponse.json({error: "Invalid email or password 2"}, {status: 401});
        }*/

        if (user.password !== password) {
            return NextResponse.json({ error: "Invalid email or password (plaintext check)" }, { status: 401 });
        }
   
        // 3. Generate Token

        const token = jwt.sign(
            {id: user._id,email:user.email,username: user.name,role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        return NextResponse.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.name,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
}

