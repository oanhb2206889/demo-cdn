const transfer = (userName, currentAmount, amountChange) => {
  const newAmount = currentAmount + amountChange;
  return {
    userName: userName,
    newAmount: newAmount,
  };
};

export { transfer };
