import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { fizzbuzz } from "./fizzbuzz.ts";

Deno.test("fizzbuzz(1)", () => {
  assertEquals(fizzbuzz(1), "1");
});

Deno.test("fizzbuzz(3)", () => {
  assertEquals(fizzbuzz(3), "Fizz");
});

Deno.test("fizzbuzz(5)", () => {
  assertEquals(fizzbuzz(5), "Buzz");
});

Deno.test("fizzbuzz(15)", () => {
  assertEquals(fizzbuzz(15), "FizzBuzz");
});
