const { format } = require('data-fns');

function formatDate(timestamp) {
    return format(timestamp, 'yyyy-MM-dd HH:mm:ss');
};

module.exports = formatDate;