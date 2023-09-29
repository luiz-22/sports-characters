import mongoose, { Schema, Document } from "mongoose";

interface Sport extends Document {
  _id: number;
  name: string;
  icon: string;
}

const sportSchema = new Schema<Sport>({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
});

const SportModel = mongoose.model<Sport>("Sport", sportSchema);

export default SportModel;
