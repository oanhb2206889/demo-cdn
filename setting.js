const functions = {
  transfer: function (userName, currentAmount, amountChange) {
    const newAmount = currentAmount + amountChange;
    return {
      userName: userName,
      newAmount: newAmount,
    };
  },
};
