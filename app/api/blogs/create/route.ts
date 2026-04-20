import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract data
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const category = formData.get('category') as string;
    const authorName = formData.get('authorName') as string;
    const postImage = formData.get('postImage') as File | null;
    const authorImage = formData.get('authorImage') as File | null;

    const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "https://cms.dostartup.in";
    const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";

    if (!TOKEN) {
      return NextResponse.json({ success: false, error: "CMS API Key is missing on server" }, { status: 500 });
    }

    const uploadAsset = async (file: File) => {
      const fData = new FormData();
      fData.append('files[]', file);

      try {
        const res = await fetch(`${CMS_URL}/api/assets/upload?token=${TOKEN}`, {
          method: 'POST',
          body: fData,
        });
        
        if (!res.ok) {
          const errText = await res.text();
          console.error("Asset upload failed:", errText);
          return null;
        }

        const data = await res.json();
        if (data && data.assets && data.assets.length > 0) {
          return data.assets[0];
        }
        return null;
      } catch (e) {
        console.error("Asset upload exception:", e);
        return null;
      }
    };

    let postImageUrl = null;
    let authorImageUrl = null;

    if (postImage) {
      postImageUrl = await uploadAsset(postImage);
    }
    if (authorImage) {
      authorImageUrl = await uploadAsset(authorImage);
    }

    // Create blog post with 'pending' status
    const blogPayload = {
      data: {
        title,
        content: [content], // Format as array for Cockpit Repeater/Layout field
        category,
        post_status: 'pending',
        upload_date: (() => {
          const now = new Date();
          const pad = (n: number) => String(n).padStart(2, '0');
          return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
        })(),
        writer_name: authorName,
        author_name: authorName,
        image_url: postImageUrl,
        author_image: authorImageUrl,
        viewcount: 0
      }
    };

    const blogRes = await fetch(`${CMS_URL}/api/content/item/blogs?token=${TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogPayload),
    });

    if (!blogRes.ok) {
      const errText = await blogRes.text();
      return NextResponse.json({ success: false, error: `CMS Error: ${errText}` }, { status: blogRes.status });
    }

    const blogData = await blogRes.json();
    return NextResponse.json({ success: true, data: blogData });

  } catch (error: any) {
    console.error("Backend blog creation error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
