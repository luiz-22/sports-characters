import { Schema, model } from "mongoose";

interface ICharacter {
  _id: number;
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

const characterSchema = new Schema<ICharacter>({
  //_id: { type: Number, required: false },
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
      _id: false,
    },
  ],
});

const Character = model<ICharacter>("Character", characterSchema);

export default Character;
