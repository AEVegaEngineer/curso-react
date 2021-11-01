const moment = require('moment');
moment.locale('es');
const longDateFormat = (integerDate) => {  
  return moment(integerDate).format('LLLL');
}

module.exports = { longDateFormat };
