import { Schema, model } from "mongoose";

interface ISport {
  _id: number;
  name: string;
  icon: string;
}

const sportSchema = new Schema<ISport>({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
});

const Sport = model<ISport>("Sport", sportSchema);

export default Sport;
