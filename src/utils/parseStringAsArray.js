module.exports = function parseStringAsArray(string) {
  string.split(',').map(item => item.trim());
}