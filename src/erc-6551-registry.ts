import { BigInt } from "@graphprotocol/graph-ts";
import {
  ERC6551Registry,
  AccountCreated,
} from "../generated/ERC6551Registry/ERC6551Registry";
import { Account } from "../generated/schema";

export function handleAccountCreated(event: AccountCreated): void {
  let entity = Account.load(event.params.account.toHex());
  if (entity) return;

  entity = new Account(event.params.account.toHex());
  entity.chainID = event.params.chainId;
  entity.tokenContract = event.params.tokenContract;
  entity.tokenID = event.params.tokenId;

  // Entities can be written to the store with `.save()`
  entity.save();
}
