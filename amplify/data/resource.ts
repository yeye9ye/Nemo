import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Bridge: a.model({
      name: a.string().required().default("UNKNOWN"),
      latitude: a.float().required().default(0.0),
      longitude: a.float().required().default(0.0),
      details: a.hasOne("Details", "bridgeId"),
    }).authorization((allow) => [allow.publicApiKey()]),
  Details: a.model({
      bridge: a.belongsTo("Bridge", "bridgeId"),
      bridgeId: a.id(),
      city: a.string().required().default("UNKNOWN"),
      state: a.string().required().default("UNKNOWN"),
      date: a.date().required().default("1989-04-20"),
      type: a.string().required().default("UNKNOWN"),
      reason: a.string().required().default("UNKNOWN"),
  }).authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 300,
    },
  },
});
