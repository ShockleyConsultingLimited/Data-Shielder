interface ElectronAPI {
  createWindowAndFillForm(): void;
}

interface Window {
  electronAPI?: ElectronAPI;
}
