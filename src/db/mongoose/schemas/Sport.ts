import mongoose, { Schema, Document, Model } from "mongoose";

export interface Sport extends Document {
  _id: number;
  name: string;
  icon: string;
}

const sportSchema = new Schema<Sport>({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
});

sportSchema.statics.list = async function (): Promise<Sport[]> {
  return this.find().exec();
};

//const SportModel = mongoose.model<Sport, SportModel>("Sport", sportSchema);

export default sportSchema;
