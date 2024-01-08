import { NextRequest, NextResponse } from "next/server";
import schema from './schema'

export function GET(request: NextRequest){
  // fetch users from db
  return NextResponse.json([
    { id: 1, name:'Mosh' },
    { id: 2, name:'Dave' },
  ])
}

export async function POST(request: NextRequest){
  const body = await request.json()
  const validation = schema.safeParse(body)
  if(!validation.success){
    return NextResponse.json(validation.error.errors, {status: 404})
  }
  return NextResponse.json({ id: 1, name: body.name }, {status: 201})
}

/* Manual error handling
export async function POST(request: NextRequest) {
  const body = await request.json()  // returns a promise, so must be awaited
  // Validate
  // If invalid, return 404
  // Else, return data that was created
  if (!body.name){
    return NextResponse.json({ error: 'Name is required!' }, { status: 400 })
  }

  return NextResponse.json({id: 1, name: body.name}, { status: 201 })
}
*/