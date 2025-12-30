import { NextResponse } from "next/server";

// Mock data for users
const mockUsers = [
  {
    email: "test@example.com",
    password: "password123",
    studentId: "12345",
    name: "Test User"
  },
  {
    email: "admin@example.com",
    password: "admin123",
    studentId: "67890",
    name: "Admin User"
  }
];

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

        // Find user in mock data
        const user = mockUsers.find(u => u.email === email && u.password === password);

        if (!user) {
            console.log("❌ Invalid credentials for email:", email);
            return NextResponse.json(
                { error: "Email hoặc mật khẩu không đúng" },
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