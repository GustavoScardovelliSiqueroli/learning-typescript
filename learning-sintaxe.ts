//Hello everyone!
function sayGoodDay(name: string, date: Date): void {
  console.log(`Good ${date.toDateString()}, ${name}`);
  return;
}

sayGoodDay("Gustavo", new Date());

let names: string[] = ["Gustavo", "Maria", "Ernesto", "Aleida", "Ligia"];

names.sort((a: string, b: string) => a.length - b.length);

console.log(names);
console.log();

function paramsWithObj(abc: { x: number; y: string; name?: string }) {
  console.log("x->", abc.x);
  console.log("y->", abc.y);
  console.log(abc.name ? `name-> ${abc.name}` : "name-> no name!");
}

paramsWithObj({ y: "oi", x: 0, name: "Maria" });

type Point = {
  x: number;
  y: number;
};

interface IPoint {
  x: number;
  y: number;
}

function invertPoint(point: Point): IPoint | Point {
  return { x: point.y, y: point.x };
}

const invertedPoint = invertPoint({ x: 10, y: 20 }) as IPoint;
console.log(invertedPoint);

const messageConst = "teste";

let messageLet: "teste" = "teste";
// messageLet = "abc"; //ERROR

interface Space {
  alignment: "left" | "right" | "center";
}

function returnTypeSpace(x: Space): -1 | 0 | 1 {
  return x.alignment == "center" ? 0 : x.alignment == "left" ? -1 : 1;
}
console.log(returnTypeSpace({ alignment: "center" }));

console.log();
console.log(typeof messageConst);

function printAll(strs: string | string[] | null) {
  if (!strs) {
    return "";
  }
  switch (typeof strs) {
    case "object":
      for (const s of strs) console.log(s);
      return strs;

    case "string":
      console.log(strs);
      return strs;
    default:
      const _exhaustiveCheck: never = strs;
      return _exhaustiveCheck;
  }
}
