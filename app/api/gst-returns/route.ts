import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('GST Returns Request:', formData);

    const payload: any = {
      form_type: 'GST Return Filing',
      category: formData.nature_of_business || null,
      gstin: formData.gstin ? String(formData.gstin).toUpperCase() : null,
      username: formData.username || null,
      upload_consent: formData.upload_consent || false,
      user_id: formData.user_id || null,
      package: formData.package || null,
      status: 'pending',
    };

    console.log('Payload to save:', payload);

    const { data, error } = await supabase
      .from('gst_returns')
      .insert([payload])
      .select();

    if (error) {
      console.error('Supabase Error:', error);
      return NextResponse.json({ error: error.message || 'Failed to save data' }, { status: 400 });
    }

    console.log('GST Returns Saved:', data);
    return NextResponse.json({ data });
  } catch (err: any) {
    console.error('API Route Exception:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
