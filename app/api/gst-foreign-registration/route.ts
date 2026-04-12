import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('GST Foreign Registration Request:', formData);

    const state = formData.state || null;
    const pan = formData.pan ? String(formData.pan).toUpperCase() : null;
    const nature_of_business = formData.nature_of_business || null;
    const pkg = formData.package || null;
    const user_id = formData.user_id || null;

    // 1. Insert raw form data into gst_foreign_registration_forms
    const { data: formRecord, error: formError } = await supabase
      .from('gst_foreign_registration_forms')
      .insert([{ state, pan, nature_of_business, package: pkg }])
      .select();

    if (formError) {
      console.error('gst_foreign_registration_forms Error:', formError);
      // Don't block — continue to main registration
    } else {
      console.log('gst_foreign_registration_forms Saved:', formRecord);
    }

    // 2. Insert tracking record into gst_registrations (used by payment modal & profile)
    const payload = {
      registration_type: 'GST Registration for Foreigners',
      state,
      pan,
      nature_of_business,
      package: pkg,
      status: 'pending',
      user_id,
    };

    const { data, error } = await supabase
      .from('gst_registrations')
      .insert([payload])
      .select();

    if (error) {
      console.error('gst_registrations Error:', error);
      return NextResponse.json({ error: error.message || 'Failed to save data' }, { status: 400 });
    }

    console.log('GST Foreign Registration Saved (gst_registrations):', data);
    return NextResponse.json({ data });
  } catch (err: any) {
    console.error('API Route Exception:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
