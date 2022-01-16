var DateFormat = {
  Date(date) {
    try {
      let d = new Date(date);
      return (
        ("0" + d.getDate()).slice(-2) +
        "." +
        ("0" + (d.getMonth() + 1)).slice(-2) +
        "." +
        d.getFullYear()
      );
    } catch (e) {
      return "n/a";
    }
  },
};

module.exports = DateFormat;
