import mongoose, { Schema, Document } from "mongoose";

interface Country extends Document {
  _id: number;
  flag: string;
  name: string;
  code: string;
}

const countrySchema = new Schema<Country>({
  _id: { type: Number, required: true },
  flag: { type: String, required: true },
  name: { type: String, required: true },
  code: { type: String, required: true },
});

const CountryModel = mongoose.model<Country>("Country", countrySchema);

export default CountryModel;
