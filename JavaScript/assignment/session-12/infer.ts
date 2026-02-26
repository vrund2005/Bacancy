// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean)


type FirstArgument1<T> = T extends (...args:infer Args) => void ? Args[0] : never;
type FirstArgument2<T> = T extends (arg1:infer A,...args:any[]) => void ? A : never;

function some(id:string,active:boolean):void{}

type returned1 = FirstArgument1<typeof some>
type returned2 = FirstArgument2<typeof some>
