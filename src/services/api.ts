import { Client, Account, Databases, Storage, Teams } from 'appwrite';
import { client, account, databases, storage, teams } from '../config/appwrite';

export {
  client,
  account,
  databases,
  storage,
  teams
};

// Also export types for convenience
export type {
  Client,
  Account,
  Databases,
  Storage,
  Teams
};
