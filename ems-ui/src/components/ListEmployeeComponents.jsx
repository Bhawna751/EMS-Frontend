import React from 'react'

const ListEmployeeComponents = () => {

    const dummyData = [
        {
            "id":1,
            "firstName":"Bhawna",
            "lastName": "Pillai",
            "email": "bhawna@gmail.com"
        },
        {
            "id":2,
            "firstName":"Anita",
            "lastName": "Pillai",
            "email": "Anita@gmail.com"
        },
        {
            "id":3,
            "firstName":"Jon",
            "lastName": "Doe",
            "email": "jondoe@gmail.com"
        },
        {
            "id":4,
            "firstName":"Eren",
            "lastName": "Smith",
            "email": "eren@gmail.com"
        }
    ]

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {
                        dummyData.map(employee => 
                            <tr key = {employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponents