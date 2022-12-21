# Yearn Keeper Scripts

This repository enables keepers of the Keep3r Network to execute Yearn's jobs on Ethereum.

## How to run

1. Clone the repository

```
  git clone https://github.com/yearn/keeper-scripts
```

2. Install dependencies

```
  yarn install
```

3. Create and complete the `.env` file using `env.example` as an example

4. Fine-tune the constants in `src/constants.ts` to your liking. Read [the docs](https://docs.keep3r.network/keeper-scripts) for a technical in-depth explanation.

5. Try out the scripts

```
  yarn start:harvest: ts-node src/grizzly-keep3r.ts
  yarn start:grizzly-keep3r: ts-node src/grizzly-keep3r.ts
```

## Run in production

1. Build the typescript into javascript

```
  yarn build
```

2. Run the jobs directly from javascript (using [PM2](https://github.com/Unitech/pm2) is highly recommended)

```
  node dist/grizzly-keep3r.js
```

## Keeper Requirements

**Harvest Jobs (Autocompounding of Grizzly Strategies**:

- To work `HarvestV2Job`, the keeper must be a valid keeper on [Keep3r V2](https://etherscan.io/address/0xeb02addCfD8B773A5FFA6B9d1FE99c566f8c44CC)
- Have at least 50 KP3R bonded
- Should not be a contract

## Useful Links

- [Harvest Keep3r Job](https://etherscan.io/address/0xe74379Ed6e94C85dA90d27B92DF670DB282995af)
- [Keep3r V2](https://etherscan.io/address/0xeb02addCfD8B773A5FFA6B9d1FE99c566f8c44CC)
