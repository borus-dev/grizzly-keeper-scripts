// Ethereum Mainnet
export const CHAIN_ID = 1;

// Size of our batch of bundles
export const BURST_SIZE = 3;

// Blocks into the future to send our first batch of bundles
export const FUTURE_BLOCKS = 0;

// Priority fee to use
export const PRIORITY_FEE = 2;

// Flashbots RPC. Taken from https://docs.flashbots.net
export const FLASHBOTS_RPC = 'https://relay.flashbots.net';

// How many minutes to wait until we fetch the cooldown of a job to see if it changed
export const COOLDOWN_INTERNAL_MINUTES = 120;
