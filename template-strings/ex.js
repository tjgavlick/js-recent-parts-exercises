function upper(strings, ...values) {
  str = strings[0];
  for (let i = 0; i < values.length; i++) {
    str += values[i].toUpperCase();
    str += strings[i + 1];
  }
  return str;
}

const name = "kyle",
    	twitter = "getify",
    	topic = "JS Recent Parts";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
