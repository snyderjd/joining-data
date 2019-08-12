const employees = [
    {
        "employeeId": 0,
        "name": "Curtis",
        "departmentId": 0,
        "computerId": 1
    },
    {
        "employeeId": 1,
        "name": "Humberto",
        "departmentId": 0,
        "computerId": 2
    },
    {
        "employeeId": 2,
        "name": "Sarah",
        "departmentId": 1,
        "computerId": 3
    },
    {
        "employeeId": 3,
        "name": "Noah",
        "departmentId": 1,
        "computerId": 4
    }
];

const departments = [
    {
        "departmentId": 0,
        "department": "Sales"
    },
    {
        "departmentId": 1,
        "department": "Finance"
    }
];

const computers = [
    {
        "computerId": 0,
        "make": "Dell"
    },
    {
        "computerId": 1,
        "make": "Apple"
    },
    {
        "computerId": 2,
        "make": "Microsoft"
    },
    {
        "computerId": 3,
        "make": "Apple"
    },
    {
        "computerId": 4,
        "make": "Dell"
    }
];

const companyDatabase = {
    "employees": employees,
    "departments": departments,
    "computers": computers
};

console.log(companyDatabase);

const employeeContainer = document.querySelector(".employee__container");

companyDatabase.employees.forEach(employee => {
    const employeeName = employee.name;
    const employeeDept = companyDatabase.departments[employee.departmentId].department;
    console.log(employeeDept);
    const employeeComputer = companyDatabase.computers[employee.computerId].make;
    console.log(employeeComputer);

    employeeContainer.innerHTML += `<section class="employee">
                                        <h2>Name: ${employeeName}</h2>
                                        <h3>Dept: ${employeeDept}</h3>
                                        <p>${employeeName} uses a ${employeeComputer} computer.</p>
                                    </section>`;
});



