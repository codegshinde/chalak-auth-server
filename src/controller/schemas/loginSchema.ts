import { Static, Type } from "@sinclair/typebox";

const options = Type.Object({
  userId: Type.String({ maxLength: 6, minLength: 6 }),
  password: Type.RegExp(`^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$`),
});

export const loginRouteSchema = {
  body: options,
};

export type LoginRouteBody = Static<typeof options>;
