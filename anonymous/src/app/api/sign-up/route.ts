import dbConnect from "@/lib/dbConnect";
import  UserModel  from "@/model/user";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";


export async function POST(request: Request){
    await dbConnect();
    try {

        const {username, email, password} = await request.json();
        const exitingUserVerifiedByUsername = await UserModel.findOne({
            username: username,
            isVerified: true
        })

        if(exitingUserVerifiedByUsername){
            return Response.json({
                success: false,
                message: "Username already taken"
            },{
                status: 400
            })
        }

        
        
    } catch (error) {
        console.log("Error Registering User", error);
        return Response.json({
            success: false,
            message: "Error Registering User"
        },{
            status: 500
        })
    }
}