import { DrawableObject } from "./drawable-object";

export const seedDrawableObjects = () => {
  // some code to seed database records
  console.log("This is where I would seed objects prior to a test run");
  // @ts-ignore
  new DrawableObject();
};
