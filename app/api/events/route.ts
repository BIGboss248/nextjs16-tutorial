import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST(req: NextResponse) {
    try{
        await connectDB();
        const formData = await req.formData();
        let event;
        try{
            event = Object.fromEntries(formData);
        } catch (e){
            console.error(e);
            return NextResponse.json({message:"Invalid JSON data format"}, {status:400});
        }
        const createdEvent = await Event.create(event);
        return NextResponse.json({message:"Event created successfully", event: createdEvent}, {status:201});
    } catch (e){
        console.error(e);
        return NextResponse.json({message: "Error creation failed", error: e instanceof Error ? e.message : "Unknown error"}, {status:500});
    }
    
}