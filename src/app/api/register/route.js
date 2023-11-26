import { User } from "../../models/user";

export async function POST(req, res) {

    // mongoose.connect(process.env.MONGO_URL);

    const body = await req.json();
    const newUser = await User.create(body);
    return Response.json(newUser)
}