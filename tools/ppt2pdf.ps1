param([string]$In, [string]$Out)
$pp = New-Object -ComObject PowerPoint.Application
try {
    $pres = $pp.Presentations.Open($In, $true, $false, $false)
    $pres.SaveAs($Out, 32)
    "slides=$($pres.Slides.Count) size=$($pres.PageSetup.SlideWidth)x$($pres.PageSetup.SlideHeight)"
    $pres.Close()
} finally {
    $pp.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($pp) | Out-Null
}
