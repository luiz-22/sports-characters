import mongoose, { Schema, Document } from "mongoose";

interface Character extends Document {
  id: number;
  name: string;
  gender: string;
  age: number;
  height: number;
  image: string;
  country: {
    name: string;
    flag: string;
  };
  sports: Array<{
    name: string;
    icon: string;
  }>;
}

const characterSchema = new Schema<Character>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  image: { type: String, required: true },
  country: {
    name: { type: String, required: true },
    flag: { type: String, required: true },
  },
  sports: [
    {
      name: { type: String, required: true },
      icon: { type: String, required: true },
    },
  ],
});

const CharacterModel = mongoose.model<Character>("Character", characterSchema);

export default CharacterModel;
