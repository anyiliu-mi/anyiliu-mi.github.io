Add-Type -AssemblyName System.Drawing

function Create-EmailImage ($text, $colorHex, $outputPath) {
    # 2x scale for Retina sharpness
    $width = 400
    $height = 48
    $bmp = New-Object System.Drawing.Bitmap $width, $height
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    
    # Transparent background
    $g.Clear([System.Drawing.Color]::Transparent)
    
    # Color
    $c = [System.Drawing.ColorTranslator]::FromHtml($colorHex)
    $brush = New-Object System.Drawing.SolidBrush $c
    
    # Try Inter or Segoe UI
    $font = New-Object System.Drawing.Font('Segoe UI', 18, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Point)
    
    $g.DrawString($text, $font, $brush, 2, 6)
    
    # Crop to actual content width
    $textSize = $g.MeasureString($text, $font)
    $cropWidth = [Math]::Ceiling($textSize.Width) + 6
    $cropHeight = [Math]::Ceiling($textSize.Height) + 4
    
    $croppedBmp = $bmp.Clone((New-Object System.Drawing.Rectangle(0, 0, $cropWidth, $cropHeight)), $bmp.PixelFormat)
    $croppedBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $brush.Dispose()
    $font.Dispose()
    $g.Dispose()
    $bmp.Dispose()
    $croppedBmp.Dispose()
}

$outputDir = "public/images"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

# Generate light mode email image (dark gray text #1c1917)
Create-EmailImage -text "anyiliu@oakland.edu" -colorHex "#1c1917" -outputPath "$outputDir/email.png"
# Generate muted text email image (#57534e)
Create-EmailImage -text "anyiliu@oakland.edu" -colorHex "#57534e" -outputPath "$outputDir/email-muted.png"

Write-Host "Email images generated successfully in $outputDir!"
