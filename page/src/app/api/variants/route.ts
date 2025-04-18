import { NextRequest, NextResponse } from "next/server";
import variant_1 from './variant-1.json';
import variant_2 from './variant-2.json';
import variant_3 from './variant-3.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id === "2") {
    return NextResponse.json(variant_2);
  }

  if (id === "3") {
    return NextResponse.json(variant_3);
  }

  return NextResponse.json(variant_1);
}
