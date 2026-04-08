# Standardizing Service Pages (Startup, etc.) based on screenshot colors:
# Main Background: #F4F3EE
# Content Cards: #FFFFFF

# ---- Faq.tsx ----
$faq = Get-Content 'app/components/Faq.tsx' -Raw
$faq = $faq -replace 'className="bg-white py-16', 'className="bg-[#F4F3EE] py-16'
Set-Content 'app/components/Faq.tsx' $faq -NoNewline
Write-Host "Faq.tsx section background set to #F4F3EE"

# ---- DynamicTabContent.tsx ----
$dtc = Get-Content 'app/components/DynamicTabContent.tsx' -Raw
# Background wrappers
$dtc = $dtc -replace 'bg-\[#F4F3EE\]/80 backdrop-blur-sm', 'bg-white/80 backdrop-blur-sm'
# Content Cards (Sidebars and Main)
$dtc = $dtc -replace '<div className="bg-\[#F4F3EE\] rounded-2xl border border-\[#E5E2DA\] overflow-hidden shadow-sm">', '<div className="bg-white rounded-2xl border border-[#E5E2DA] overflow-hidden shadow-sm">'
$dtc = $dtc -replace '<div className="bg-\[#F4F3EE\] rounded-2xl border border-\[#E5E2DA\] p-5">', '<div className="bg-white rounded-2xl border border-[#E5E2DA] p-5">'
$dtc = $dtc -replace '<div className="bg-\[#F4F3EE\] rounded-2xl shadow-sm border border-\[#E5E2DA\] overflow-hidden">', '<div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">'
# Small elements: chips, hoverables (can stay off-white or white)
# $dtc = $dtc -replace 'bg-\[#F4F3EE\] rounded-lg', 'bg-white rounded-lg'
Set-Content 'app/components/DynamicTabContent.tsx' $dtc -NoNewline
Write-Host "DynamicTabContent.tsx updated (Off-white section, White cards)"

# ---- Registration/Hero.tsx ----
$rhero = Get-Content 'app/components/Registration/Hero.tsx' -Raw
# Inner features box from off-white to white or distinct look?
# In screens, features sometimes look like white pills
$rhero = $rhero -replace 'bg-\[#F4F3EE\] border border-\[#E5E2DA\] rounded-xl p-5', 'bg-white border border-[#E5E2DA] rounded-xl p-5'
# The badge
$rhero = $rhero -replace 'bg-\[#F4F3EE\] border border-\[#E5E2DA\] rounded-full px-3 py-1', 'bg-white border border-[#E5E2DA] rounded-full px-3 py-1'
# Selects/Inputs
$rhero = $rhero -replace 'bg-\[#F4F3EE\]', 'bg-white' 
Set-Content 'app/components/Registration/Hero.tsx' $rhero -NoNewline
Write-Host "Registration/Hero.tsx updated"

Write-Host "Service page color corrections complete!"
