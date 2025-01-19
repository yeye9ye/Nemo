import { generateClient } from "aws-amplify/data";
import { Schema } from "../amplify/data/resource";
// ^ or your actual import path for generateClient<Schema>()
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

// Store the client in a module-level variable
let client: ReturnType<typeof generateClient<Schema>> | null = null;

/**
 * Initialize the client once (e.g., in main.tsx).
 * We only call generateClient if it hasn't been created yet.
 */
export function initClient() {
  if (!client) {
    client = generateClient<Schema>();
    console.log("client initialized");
  }
}

/** Retrieve the already-initialized client. */
export function getClient() {
  if (!client) {
    console.log("client is not initialized when trying to get it, so init now...")
    // throw new Error("Client not initialized. Call initClient() first!");
    Amplify.configure(outputs);
    initClient();
  }
  return client;
}
