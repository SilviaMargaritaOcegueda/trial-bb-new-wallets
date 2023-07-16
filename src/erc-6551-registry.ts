import { BigInt } from "@graphprotocol/graph-ts";
import {
  ERC6551Registry,
  AccountCreated,
} from "../generated/ERC6551Registry/ERC6551Registry";
import { Account } from "../generated/schema";

export function handleAccountCreated(event: AccountCreated): void {
  let account = Account.load(event.params.account.toHex());
  if (account) return;

  account = new Account(event.params.account.toHex());
  account.chainID = event.params.chainId;
  account.tokenContract = event.params.tokenContract;
  account.tokenID = event.params.tokenId;

  // Entities can be written to the store with `.save()`
  account.save();
}
