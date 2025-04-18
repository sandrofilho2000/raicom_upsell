import { NextRequest, NextResponse } from "next/server";
import variants_list from './variant_list.json';

export async function GET(request: NextRequest) {
  return NextResponse.json(variants_list);
}
