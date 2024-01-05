import React from 'react'
import Link from 'next/link'

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
  const users: User[] = await res.json()

  if(sortOrder === 'name'){
    users.sort((a, b) => {
      let x = a.name.toLowerCase()
      let y = b.name.toLowerCase()
      if(x < y) {return -1}
      if(x > y) {return 1}
      return 0
    })
  }
  if(sortOrder === 'email'){
    users.sort((a, b) => {
      let x = a.email.toLowerCase()
      let y = b.email.toLowerCase()
      if(x < y) {return -1}
      if(x > y) {return 1}
      return 0
    })
  }
  //console.log(users)

  return (
    <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
              <Link href='/users?sortOrder=name'>Name</Link>
            </th>
            <th>
              <Link href='/users?sortOrder=email'>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td></tr>)}
        </tbody>
      </table>
  )
}

export default UserTable