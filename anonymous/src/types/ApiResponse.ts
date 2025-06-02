import { Message } from "@/model/user"


// Now using this type safety when we send any response it must contain success, message and any other info as we want.
export interface ApiResponse {
    success: boolean,
    message: string,
    isAcceptingMessages?: boolean,
    messages?: Array<Message>
}