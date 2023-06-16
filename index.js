// Write your solution in this file!

let employee={ 
    name:'Sam',
    streetAddress:'Dennis Pritt Road'
 }


function updateEmployeeWithKeyAndValue(employee,key, value){

    employee ={...employee}
    employee[key]=value
    //employees[`${key}`]=value,
    return employee

}


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    employee[key]=value         //Tells object to change the employee "key" to the value of "value"
    return employee

}

function deleteFromEmployeeByKey(object, key){
    var employees={...object}
    delete employees[key]
    return employees
}

function destructivelyDeleteFromEmployeeByKey(object,key){
    let employee1 ={...object}
    delete employee1[key]
    delete employee[key]
    return employee1, employee
}



//updateEmployeeWithKeyAndValue(employee,"streetAddress","11 Broadway")
//destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress" , "12 Broadway")

destructivelyDeleteFromEmployeeByKey(employee,'name')
console.log(employee.streetAddress)

//deleteFromEmployeeByKey(employee,`name`)
//console.log(employees)



//let objectName="name"
//console.log(employee[objectName])
//console.log(employee.district.constit)