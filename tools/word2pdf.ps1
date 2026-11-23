param([string]$In, [string]$Out)
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
try {
    $doc = $word.Documents.Open($In, $false, $true)
    $doc.Repaginate()
    $pages = $doc.ComputeStatistics(2)
    $doc.ExportAsFixedFormat($Out, 17)
    $doc.Close($false)
    "pages=$pages"
} finally {
    $word.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
}
