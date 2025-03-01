# Script: install_dependencies.ps1
$requirementsPath = "backend\requirements.txt"
$venvPath = "backend\env"

# Verificar entorno virtual y requirements
if (-not (Test-Path $venvPath)) { Write-Host "❌ Entorno virtual no existe en: $venvPath" -ForegroundColor Red; exit 1 }
if (-not (Test-Path $requirementsPath)) { Write-Host "❌ requirements.txt no existe en: $requirementsPath" -ForegroundColor Red; exit 1 }

# Activar entorno (simbólico, por si hay variables necesarias)
& "$venvPath\Scripts\Activate.ps1"

# Instalar usando el Python del entorno virtual
Write-Host "🚀 Instalando dependencias..." -ForegroundColor Cyan
& "$venvPath\Scripts\python.exe" -m pip install -r $requirementsPath

# Desactivar y salir
#deactivate
#Read-Host -Prompt "Presiona Enter para salir"