// let john: number = 14;
// if (john < 50) john += 10;

// console.log(john);

// const user: [string, number] = ["mosh", 1];

// const enum Size {
//   small = 1,
//   medium = 2,
//   large,
// }

// let Msize: Size = Size.large;

// console.log(Msize);

// function calculateTax(income: number, taxyear = 2023): number {
//   if (taxyear < 50_000) return income * 1.6;
//   return income * 1.3;
// }

// calculateTax(10_000, 2022);

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => {
//     return date;
//   },
// };

// employee.name = "john";

// function kgToLbs(weight: number | string): number {
//   //   narrpwing
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }

// console.log(kgToLbs(10));
// kgToLbs("10kg");

// type Quantity = 50 | 100;

// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";

// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("Dora");
// }

// greet(null);

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

console.log(customer?.birthday);
