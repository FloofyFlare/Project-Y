const walletTransaction = {
    selectedTabId: "1",
    whichWalletSelected: undefined,
    walletFound: false,
    walletIsEnabled: false,
    walletName: undefined,
    walletIcon: undefined,
    walletAPIVersion: undefined,
    wallets: [],

    networkId: undefined,
    Utxos: undefined,
    CollatUtxos: undefined,
    balance: undefined,
    changeAddress: undefined,
    rewardAddress: undefined,
    usedAddress: undefined,

    txBody: undefined,
    txBodyCborHex_unsigned: "",
    txBodyCborHex_signed: "",
    submittedTxHash: "",

    addressBech32SendADA: "addr1q937ewsxc200xpsf0qryezjnpg7zpnmn3y475ej87hd53vrn3q6uwfj9mf4xu9gh2ukj524pt2eg647xdwajtv4k56tq3wu4v7",
    lovelaceToSend: 2000000,
    assetNameHex: "446a65644d6963726f555344",
    assetPolicyIdHex: "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61",
    assetAmountToSend: 1000000,
    addressScriptBech32: "addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8",
    datumStr: "12345678",
    plutusScriptCborHex: "4e4d01000033222220051200120011",
    transactionIdLocked: "",
    transactionIndxLocked: 0,
    lovelaceLocked: 3000000,
    manualFee: 900000,

}

const protocolParams = {
  linearFee: {
      minFeeA: "444",
      minFeeB: "155381",
  },
  minUtxo: "34482",
  poolDeposit: "500000000",
  keyDeposit: "2000000",
  maxValSize: 5000,
  maxTxSize: 16384,
  priceMem: 0.0577,
  priceStep: 0.0000721,
  coinsPerUtxoWord: "34482",
}