// Mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};

const getPromise = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

console.log(getPromise());

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};
const getPromiseBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};
console.log(getPromiseBoolean());

interface dataType {
  name: string;
}

const makePromiseObject = (): Promise<dataType> => {
  return new Promise<dataType>((resolve, reject) => {
    const data: dataType = { name: "Name bro" };
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};
const getPromiseObject = async (): Promise<dataType> => {
  const data = await makePromiseObject();
  return data;
};
console.log(getPromiseObject());

// FETCH DATA
// https://jsonplaceholder.typicode.com/todos/1

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};
getTodoData();
