const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};

function updateEmployeeWithKeyAndValue(array, key, value){
    const newArray = {...array};
    newArray.key = value;
    return newArray;
};

console.log(employee);
updateEmployeeWithKeyAndValue(employee, "name", "Sally");
