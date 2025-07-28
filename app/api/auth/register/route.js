import { connectDb } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req){
    try{

        await connectDb();
        const body = await req.json();

        const { email, password, name, role } = body;
        
        if(!email || !password || !name || !role){
            return NextResponse.json({error: "All fields are required"}, {status: 400});
        }

        // 1. Check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        // 3. Create User   

        const user = await User.create({
            email,
            password,
            name,
            role: role || "user" // Default role to 'user' if not provided
        });
        if (!user) {
            return NextResponse.json({ error: "User creation failed" }, { status: 500 });
        }else{
            return NextResponse.json({ message: "User created successfully", user }, { status: 201 },{ user: { id: user._id, email: user.email, name: user.name, role: user.role } });
        }



        // 4. Generate Token

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

        return NextResponse.json({user, token}, {status: 201});


    }catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({error: "Internal server error 1"}, {status: 500});
    }
}