import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const isExistingGst = !!formData.gstin;

    const payload: any = {
      nature_of_business: formData.nature_of_business,
      package: formData.package,
      registration_type: isExistingGst ? 'GST Return Filing' : 'New Registration',
      status: 'pending_payment'
    };

    if (isExistingGst) {
      payload.gstin = formData.gstin;
      // You can add more mapping here if the table has specific column for existing records
    } else {
      payload.state = formData.state;
      payload.pan = formData.pan ? String(formData.pan).toUpperCase() : null;
      payload.phone = formData.phone ? String(formData.phone) : null;
    }

    const { data, error } = await supabase
      .from('gst_registrations')
      .insert([payload])
      .select();

    if (error) {
      console.error('Server Supabase Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (err: any) {
    console.error('API Route Exception:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
