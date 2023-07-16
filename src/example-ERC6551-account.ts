import { BigInt } from "@graphprotocol/graph-ts";
import {
  ExampleERC6551Account,
  zkPreferencesAdded,
} from "../generated/ExampleERC6551Account/ExampleERC6551Account";
import { Account } from "../generated/schema";

export function handleZkPreferencesAdded(event: zkPreferencesAdded): void {
  let account = Account.load(event.transaction.to!.toHex());
  if (!account) return;

  account.preferences = event.params.newPreferences;
  account.save();
}
