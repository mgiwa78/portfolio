# Exports every resume .docx in "Claude outputs" to PDF with Microsoft Word, prints the page
# count of each, and copies the full-stack PDF to public/ for the site's resume link.
# Run after: node scripts/generate-resume.mjs
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$outputs = Join-Path $root "Claude outputs"
$word = New-Object -ComObject Word.Application
$word.Visible = $false
try {
  Get-ChildItem $outputs -Filter "Giwa-Muhammad-*.docx" | ForEach-Object {
    $doc = $word.Documents.Open($_.FullName, $false, $true)
    $pages = $doc.ComputeStatistics(2)
    $pdf = [IO.Path]::ChangeExtension($_.FullName, ".pdf")
    $doc.SaveAs2($pdf, 17)
    $doc.Close($false)
    "{0,-50} {1} page(s)" -f $_.Name, $pages
  }
} finally {
  $word.Quit()
}
Copy-Item (Join-Path $outputs "Giwa-Muhammad-Resume-FullStack.pdf") (Join-Path $root "public\Giwa-Muhammad-Resume.pdf") -Force
"copied FullStack PDF -> public/Giwa-Muhammad-Resume.pdf"
