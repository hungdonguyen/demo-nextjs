import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        console.log("🔐 Login attempt:", { email, timestamp: new Date().toISOString() });

        // Validate input
        if (!email || !password) {
            console.log("❌ Missing credentials");
            return NextResponse.json(
                { error: "Email and password are required" }, 
                { status: 400 }
            );
        }

        // Kiểm tra xem user có tồn tại không (debug)
        const userExists = await db.studentaccount.findFirst({
            where: { email: email },
        });

        if (!userExists) {
            console.log("❌ Email not found in database:", email);
            return NextResponse.json(
                { error: "Email không tồn tại trong hệ thống" }, 
                { status: 401 }
            );
        }

        console.log("✅ User found:", { email: userExists.email, name: userExists.name });

        // Kiểm tra password
        const user = await db.studentaccount.findFirst({
            where: {    
                email: email,
                password: password,
            },
        });

        if (!user) {
            console.log("❌ Password incorrect for email:", email);
            return NextResponse.json(
                { error: "Mật khẩu không đúng" }, 
                { status: 401 }
            );
        }

        console.log("Login successful:", { 
            studentId: user.studentId, 
            name: user.name,
            email: user.email 
        });

        return NextResponse.json({
            success: true,
            user: {
                studentId: user.studentId,
                name: user.name,
                email: user.email
            }
        }, { status: 200 });

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { error: "Internal server error" }, 
            { status: 500 }
        );
    }
}