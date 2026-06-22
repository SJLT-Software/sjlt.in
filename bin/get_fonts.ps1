Param(
  [string]$ManifestPath
)

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RootDir = Split-Path -Parent $ScriptDir
$Manifest = if ($ManifestPath) { $ManifestPath } else { Join-Path $ScriptDir "fonts.manifest" }
$DestDir = Join-Path $RootDir "assets\fonts"

if (-not (Test-Path $Manifest)) {
  Write-Error "FAILED: fonts.manifest not found at $Manifest"
  exit 1
}

New-Item -ItemType Directory -Force -Path $DestDir | Out-Null

Get-Content $Manifest | ForEach-Object {
  $Line = $_.Trim()
  if (-not $Line -or $Line.StartsWith("#")) { return }

  $Url = $Line
  $Name = $null

  if ($Line.Contains("|")) {
    $Parts = $Line.Split("|", 2)
    $Url = $Parts[0].Trim()
    $Name = $Parts[1].Trim()
  }

  if (-not $Name) {
    $UrlNoQuery = $Url -replace "\?.*$", ""
    $Name = Split-Path -Leaf $UrlNoQuery
  }

  if (-not $Name) {
    Write-Warning "SKIP: Could not determine filename for $Url"
    return
  }

  $Target = Join-Path $DestDir $Name
  Write-Host "Downloading $Url -> $Target"
  Invoke-WebRequest -Uri $Url -OutFile $Target
}
