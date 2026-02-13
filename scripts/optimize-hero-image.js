const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = 'public/images/hero-digital-employee.jpg';
const outputWebP = 'public/images/hero-digital-employee.webp';
const outputJPG = 'public/images/hero-digital-employee.jpg';

async function optimizeImage() {
  try {
    console.log('📸 开始优化图片...');

    // 获取原始图片信息
    const metadata = await sharp(inputFile).metadata();
    console.log(`原始信息: ${metadata.width}x${metadata.height}, ${metadata.format}, ${fs.statSync(inputFile).size / 1024 / 1024}MB`);

    // 1. 生成高质量 WebP (推荐用于现代浏览器)
    await sharp(inputFile)
      .resize(1920, null, { // 宽度限制为 1920px，高度按比例
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(outputWebP);
    const webpSize = fs.statSync(outputWebP).size / 1024;
    console.log(`✅ WebP: ${webpSize.toFixed(1)}KB`);

    // 2. 优化后的 JPG (用于后备兼容)
    const tempPng = 'public/images/hero-temp.png';
    await sharp(inputFile)
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .png({ compressionLevel: 9 })
      .toFile(tempPng);

    // 转换为 JPG (移除透明通道)
    await sharp(tempPng)
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputJPG);
    const jpgSize = fs.statSync(outputJPG).size / 1024;
    console.log(`✅ JPG: ${jpgSize.toFixed(1)}KB`);

    // 清理临时文件
    if (fs.existsSync(tempPng)) {
      fs.unlinkSync(tempPng);
    }

    // 计算压缩率
    const originalSize = fs.statSync(inputFile).size / 1024 / 1024;
    const newSize = fs.statSync(outputWebP).size / 1024 / 1024;
    const compression = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`\n📊 压缩率: ${compression}% (${originalSize.toFixed(1)}MB → ${newSize.toFixed(1)}MB)`);

    console.log('\n✨ 优化完成！');
    console.log('\n建议：将代码中的图片引用改为 .webp 格式以获得最佳性能');
  } catch (error) {
    console.error('❌ 优化失败:', error.message);
    process.exit(1);
  }
}

optimizeImage();
