import moment from "moment";
const m = moment();
m.add(47, "day");
console.log(m.format("YYYY-MM-DD"));