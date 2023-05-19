type a1 = null; // Define a type alias a1 and assign it the value null.
type a2 = a1 extends string ? string : null; // Define a type alias a2 and check if a1 is assignable to string. If it is, assign the type string to a2; otherwise, assign null.
type a3 = undefined; // Define a type alias a3 and assign it the value undefined.
type a4 = number; // Define a type alias a4 and assign it the type number.

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;
/*
   Define a type alias d. It uses conditional types to check various conditions:
   - If a1 is assignable to null, assign the type null to d.
   - If a3 is assignable to number, assign the type number to d.
   - If a4 is assignable to null, assign the type null to d.
   - If none of the conditions are met, assign the type never to d.
*/

type Sheikh = {
  wife1: string;
  wife2: string;
};

type CheckPropertyWife<T, K> = K extends keyof T ? true : false;
type CheckWife = CheckPropertyWife<Sheikh, "wife2">;

type MyFriends = "Monica" | "Rachel" | "Phoebe";
type RemoveAFriend<T, R> = T extends R ? never : T;
type currentFriends = RemoveAFriend<MyFriends, "Monica">;
