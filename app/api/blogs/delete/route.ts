import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ success: false, error: "Blog ID is required" }, { status: 400 });
    }

    const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "https://cms.dostartup.in";
    const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";

    if (!TOKEN) {
      return NextResponse.json({ success: false, error: "CMS API Key is missing" }, { status: 500 });
    }

    // 1. Try Permanent Delete
    let res = await fetch(`${CMS_URL}/api/content/item/blogs/${id}?token=${TOKEN}`, {
      method: "DELETE",
    });

    // 2. If permanent delete fails due to permissions, try Soft Delete (Status update)
    if (!res.ok) {
      const errText = await res.text();
      console.warn("Permanent delete failed, trying soft delete:", errText);
      
      res = await fetch(`${CMS_URL}/api/content/item/blogs?token=${TOKEN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            _id: id,
            post_status: 'deleted'
          }
        }),
      });
    }

    if (!res.ok) {
      const errText = await res.text();
      console.error("Soft delete also failed:", errText);
      return NextResponse.json({ 
        success: false, 
        error: `Deletion failed. CMS responded with status ${res.status}: ${errText}` 
      }, { status: res.status });
    }

    return NextResponse.json({ success: true, message: "Blog removed successfully" });

  } catch (error: any) {
    console.error("Delete blog error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
