let validator = {
    set: function (obj, prop, value) {
      if (prop === "age") {
        if (!Number.isInteger(value)) {
          throw new TypeError("The age is not an integer");
        }
        else if (Number(value) > 200) {
          throw new RangeError("The age is invalid");
        } 
        console.log(`Setting value '${value}' to '${prop}'`);
        obj[prop] = value;
        return obj[prop];
      }
      console.log(`Setting value '${value}' to '${prop}'`);
      obj[prop] = value;
      return obj[prop];
    },
    get: function (obj, prop, value) {
      console.log(`Trying to access the property '${prop}'...`);
      if (!prop) {
        return false;
      }
      return obj[prop];
    }
  };