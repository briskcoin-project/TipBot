'use strict';
let config = require('config');
let bkcFee = config.get('bkc').paytxfee;
let prefix = config.get('bot').prefix;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**:bank: Coins :bank:**__\n' +
      '  **Briskcoin (BKC) Tipper**\n    Transaction Fees: **' + bkcFee + '**\n' +        
      '__**Commands**__\n' +
      '  **' + prefix + 'tipbkc** : Displays This Message\n' +
      '  **' + prefix + 'tipbkc price** : get bkc price\n' +
      '  **' + prefix + 'tipbkc balance** : get your balance\n' +
      '  **' + prefix + 'tipbkc deposit** : get address for your deposits\n' +
      '  **' + prefix + 'tipbkc withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **' + prefix + 'tipbkc <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **' + prefix + 'tipbkc private <@user> <amount>** : put private before Mentioning a user to tip them privately\n'
    );
  }
};
