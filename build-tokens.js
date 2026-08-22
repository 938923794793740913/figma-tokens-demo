import fs from 'fs';

try {
  const rawTokens = JSON.parse(fs.readFileSync('./tokens.json', 'utf8'));
  const cssVars = [];

  if (rawTokens.global) {
    const global = rawTokens.global;

    // تبدیل رنگ‌ها
    if (global.colors) {
      for (const [key, item] of Object.entries(global.colors)) {
        cssVars.push(`  --color-${key}: ${item.value};`);
      }
    }

    // تبدیل فواصل (Spacing)
    if (global.spacing) {
      for (const [key, item] of Object.entries(global.spacing)) {
        cssVars.push(`  --spacing-${key}: ${item.value};`);
      }
    }

    // تبدیل شعاع گوشه‌ها (Border Radius)
    if (global.borderRadius) {
      for (const [key, item] of Object.entries(global.borderRadius)) {
        cssVars.push(`  --radius-${key}: ${item.value};`);
      }
    }
  }

  const cssContent = `:root {\n${cssVars.join('\n')}\n}\n`;
  fs.writeFileSync('./tokens.css', cssContent);

  console.log('✅ tokens.css generated successfully!');
} catch (error) {
  console.error('❌ Error processing tokens:', error.message);
  process.exit(1);
}
