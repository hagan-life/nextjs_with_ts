import { NextRequest, NextResponse } from "next/server";
import schema from '../schema'

/*
interface Props{
  params: { id: number }
}
export function GET(request: NextRequest, props: Props){}
*/

export function GET(
  request: NextRequest, 
  { params }: { params: { id: number } }) {
  // Fetch data from db
  // If not found, return 404 error
  // Else return data
  if (params.id > 10){
    return NextResponse.json({error: 'User not found.'}, {status: 404})
  }

  return NextResponse.json({ id: 1, name: 'Mosh' })
}

export async function PUT(
  request: NextRequest, 
  { params }: { params: { id: number } }) {
    // Validate the request body
    // If invalid, return 400
    // Fetch the user with the given id
    // If user doesn't exist, return 404
    // Update the user
    // Return the updated user

    const body = await request.json()
    const validation = schema.safeParse(body)
    if(!validation.success){
      return NextResponse.json(validation.error.errors, {status: 400})
    }
    if(params.id > 10){
      return NextResponse.json({error: 'User not found'}, {status: 404})
    }
    return NextResponse.json({id: 1, name: body.name})
  }
  /* manual validation -> without npm i zod
  const body = await request.json()
    if(!body.name){
      return NextResponse.json({error: 'Name is required'}, {status: 400})
    }
    if(params.id > 10){
      return NextResponse.json({error: 'User not found'}, {status: 404})
    }
    return NextResponse.json({id: 1, name: body.name})
  }
  */

  export function DELETE(
    request: NextRequest, 
    { params }: { params: { id: number } }
  ) {
    // Fetch user from db
    // If user not found, return 404
    // Else, Delete the user
    // Return 200 
    if(params.id > 10){
      return NextResponse.json({error: 'User not found'}, {status: 404})
    }
    return NextResponse.json({})
  }