const fabricFont = document.createElement('style');
fabricFont.type = 'text/css';
fabricFont.appendChild(document.createTextNode(`
@font-face {
    font-family: 'FabricMDL2Icons';
    src: url('https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons-2.68.woff2') format('woff2');
}
`));
document.head!.appendChild(fabricFont);
