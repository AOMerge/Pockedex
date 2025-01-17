import { IsString,IsNumber ,Length, IsEmail, IsNotEmpty, IsNotIn } from "class-validator";
const valIsNotIn = [
  "DROP",
  "SELECT",
  "INSERT",
  "DELETE",
  "UPDATE",
  "--",
  ";",
  "/*",
  "*/",
  "=",
  "(*",
  "*)",
  "{",
  "}",
  "(",
  ")",
  "[",
  "]",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "+",
  "=",
  "|",
  "\\",
  ":",
  '"',
  "'",
  "<",
  ">",
  "?",
  ",",
  ".",
  "/",
  "~",
  "`",
  " ",
];
export class likes {
  @IsString()
  @IsNotEmpty()
  @IsNotIn(valIsNotIn)
  id?: string;
}
