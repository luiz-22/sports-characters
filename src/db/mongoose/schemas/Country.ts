import { Schema, model } from "mongoose";

interface ICountry {
  _id: number;
  flag: string;
  name: string;
  code: string;
}

const countrySchema = new Schema<ICountry>({
  _id: { type: Number, required: true },
  flag: { type: String, required: true },
  name: { type: String, required: true },
  code: { type: String, required: true },
});

const Country = model<ICountry>("Country", countrySchema);

export default Country;
