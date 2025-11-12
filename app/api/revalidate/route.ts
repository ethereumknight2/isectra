import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  if (
    req.nextUrl.searchParams.get("secret") !== process.env.SANITY_WEBHOOK_SECRET
  ) {
    return NextResponse.json(
      { ok: false, error: "Invalid secret" },
      { status: 401 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const type = body?._type;
  const slug = body?.slug?.current;

  if (type === "post" && slug) revalidatePath(`/blog/${slug}`);
  if (type === "page" && slug) revalidatePath(`/${slug}`);
  if (type === "industry" && slug) revalidatePath(`/industries/${slug}`);

  // Fallbacks (lists/home)
  revalidatePath("/blog");
  revalidatePath("/");

  return NextResponse.json({ ok: true });
}
